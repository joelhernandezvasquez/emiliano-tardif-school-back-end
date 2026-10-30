# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — run the server in watch mode (`ts-node-dev`, respawns on change) using `src/app.ts`.
- `npm run build` — clean `dist/` and compile TypeScript (`tsc`) using `tsconfig.json` (`rootDir: src`).
- `npm start` — build then run the compiled `dist/app.js`.
- `npx prisma migrate dev --name <name>` — create/apply a migration after editing `prisma/schema.prisma`.
- `npx prisma generate` — regenerate the Prisma client after a schema change (also run automatically by `migrate dev`).
- `docker-compose up -d` — start the local Postgres instance (env vars for it live in `docker-compose.yml`, not `.env`).

There is no test suite or lint script configured in `package.json`.

## Environment

Copy `.env.template` to `.env`. Required vars are validated at startup via `env-var` in [src/config/envs.ts](src/config/envs.ts): `PORT`, `JWT_SEED`, `DATABASE_URL`, `API_URL`. `CORS_ORIGINS` is optional (comma-separated list, has a default). The app will throw on boot if a required var is missing.

## Architecture

Express + TypeScript + Prisma (Postgres) REST API. Layout is domain-folder-per-resource under `src/presentation/`, each following the same three-file pattern: `routes.ts` (wires middleware + validation + controller), `controller(s).ts` (parses req/res, delegates to service, maps errors to HTTP responses), `services/<resource>.service.ts` (business logic + Prisma calls).

- **Entry point**: [src/app.ts](src/app.ts) builds a `Server` (see [src/presentation/server.ts](src/presentation/server.ts)) with `AppRoutes.routes` and starts listening.
- **Routing root**: [src/presentation/routes.ts](src/presentation/routes.ts) mounts each resource's router under `/api/<resource>` (`auth`, `student`, `course`, `events`, `enrollments`, `dashboard`).
- **Resource module pattern**: each resource under `src/presentation/<resource>/` instantiates its own service and controller inside the static `routes` getter (no DI container) — e.g. [src/presentation/courses/routes.ts](src/presentation/courses/routes.ts) constructs `new CourseServices()` then `new CourseController(courseService)`, and attaches `express-validator` `check(...)` chains + `FieldValidatorMiddleware.fieldValidator` before the controller handler.
- **Auth**: JWT-based. `AuthMiddleware.validateJWT` ([src/presentation/middlewares/auth.middleware.ts](src/presentation/middlewares/auth.middleware.ts)) reads the `Authorization: Bearer <token>` header, verifies it via `JwtAdapter` ([src/config/jwt.adapter.ts](src/config/jwt.adapter.ts)), loads the `Users` row from Prisma, and attaches it to `req.body.user`. Nearly every route in every resource is gated behind this middleware. Passwords are hashed with `bcryptAdapter` ([src/config/bcrypt.adapter.ts](src/config/bcrypt.adapter.ts)).
- **Error handling**: `CustomError` ([src/domain/errors/custom.error.ts](src/domain/errors/custom.error.ts)) carries a `statusCode` + `message` with static helpers (`badRequest`, `unauthorized`, `forbidden`, `notFound`, `internalServerError`). Services throw `CustomError`; every controller has a private `handleError(error, res)` that checks `instanceof CustomError` and responds with its status/message, otherwise falls back to a generic 500. This pattern is duplicated per-controller rather than centralized in middleware — follow the existing convention when adding new endpoints.
- **Validation**: request body/query validation uses `express-validator`'s `check()` inside the route definition, followed by the shared `FieldValidatorMiddleware.fieldValidator` ([src/presentation/middlewares/fieldValidator.middleware.ts](src/presentation/middlewares/fieldValidator.middleware.ts)), which returns 400 with `errors.mapped()` if validation fails.
- **Data access**: a single shared Prisma client instance is exported from [src/data/postgres/index.ts](src/data/postgres/index.ts) and imported directly by services (and by the auth middleware) — there is no repository abstraction layer.
- **Schema**: [prisma/schema.prisma](prisma/schema.prisma) defines `Users`, `Students`, `Courses`, `Events`, `Enrollments`, `StudentCourse` plus enums (`Role`, `CourseLevel`, `EventStatus`, `EnrollStatus`). `StudentCourse` is a composite-key join table (`@@id([student_id, course_id])`); `Enrollments` links `Students` to `Events` (not directly to `Courses`) and has its own UUID id and `EnrollStatus`.
- **Interfaces**: plain TS interfaces per resource live in `src/presentation/interfaces/` (e.g. [src/presentation/interfaces/course.interface.ts](src/presentation/interfaces/course.interface.ts)) and are used as lightweight DTOs for service method inputs — they are separate from the Prisma-generated model types.
- **Static/SPA fallback**: `Server` serves `public/` as static files and falls back to `public/index.html` for any non-matching, non-`/api` route (see the catch-all `app.get('*', ...)` in [src/presentation/server.ts](src/presentation/server.ts)).
- **CORS**: allowed origins come from `CORS_ORIGINS` plus regex patterns permitting any `*.vercel.app` subdomain and any `localhost:<port>` origin (see `start()` in [src/presentation/server.ts](src/presentation/server.ts)).

## Agents

- `code-reviewer` ([.claude/agents/code-reviewer.md](.claude/agents/code-reviewer.md)): reviews and refactors code. Give it a file, folder, or resource (e.g. "courses") or let it review all of `src/`. It applies safe behavior-preserving refactors, verifies with `npm run build`, lists anything riskier as "needs approval", and never commits.
- `security-auditor`: see Security below.

## Security

A monthly audit is run by the `security-auditor` agent ([.claude/agents/security-auditor.md](.claude/agents/security-auditor.md)). It is read-only on source and writes one report per month to `security-reports/YYYY-MM.md` (findings are numbered `SEC-YYYY-MM-NN`). Read the latest report before security work, and mark findings resolved there when they are fixed.

### Status (2026-10 audit, first run, overall risk was CRITICAL)

Fixed:
- SEC-01: `GET /api/auth/refresh-token/:id` requires `validateJWT` and returns 403 unless the URL id equals the authenticated user's id (commit 30b3e47).
- SEC-02 (partial): `POST /api/auth/register` requires `validateJWT`. No role check yet, so any logged-in user can create admins (accepted risk, deferred with SEC-04).
- SEC-05: `express-rate-limit` (10 per 15 min per IP) on login and register, generic "Invalid credentials" message, async bcrypt at cost 12, 12-char minimum password on register. Login only requires a non-empty password so existing users are not locked out.
- SEC-06: dependencies upgraded (express 4.22, multer 2.5, express-validator 7.3, jsonwebtoken 9.0.3, etc.); `npm audit --omit=dev` reports 0 vulnerabilities.
- SEC-07: register strips `password_hash`; errors are logged and a generic message is returned.

- SEC-09: `helmet` (CSP disabled, cross-origin resource policy so the Vercel frontend can load uploads), global rate limit (600 per 15 min) on `/api`, `trust proxy` set from optional env `TRUST_PROXY` (default 0; set to 1 in production behind one proxy or the login limiter sees the proxy IP).
- SEC-10: `validateJWT` runs before multer on course create/update; uploads limited to JPEG/PNG/WebP with the extension derived from the mimetype. Not done: magic-byte check, moving uploads out of `public/`.

Done outside the code (per maintainer, 2026-10-27):
- Production DB password changed and production `JWT_SEED` replaced (SEC-03). Credentials remain in git history (ea08f7a, 0f6ceed, 655c9db), so rotation is what protects us. Still to verify: DB host network exposure and DB access logs. The local dev `JWT_SEED` is different from production and was never committed.

Still open:
1. SEC-04 (high, deferred): no role checks anywhere (the `Role` enum is never enforced). Add a `requireRole` middleware for destructive endpoints and `/register`.
2. SEC-08 (medium, deferred): CORS allows any `*.vercel.app` and `localhost:*` origin.
3. SEC-11 to SEC-15 (medium/low, ignored for now): missing `fieldValidator` on events/enrollments PUT and student PUT, `POSTGRES_URL` vs `DATABASE_URL` mismatch, incomplete `.env.template`, JWT hardening, logging/privacy.

### Rules for new code
- Every new route except login must sit behind `AuthMiddleware.validateJWT`; derive the acting user from `req.body.user`, never from URL params.
- Put `validateJWT` before any file upload middleware.
- Do not return Prisma rows containing `password_hash`, and do not return raw `${error}` strings to clients.
- Never commit `.env*` files other than `.env.template`; use a different `JWT_SEED` per environment.
