# Feature: Course image (uploaded file, stored on disk)

**Date:** 2026-08-26
**Status:** approved
**Goal:** Let a course be created with an image uploaded directly in the create request, saved to disk under `public/`, with the resulting path stored in `Courses.image_url`.

## Revision note

This supersedes the original version of this plan, which stored `image_url` as a
plain string the admin pasted after hosting the image elsewhere (see git history
for that version). The developer has now confirmed the deployment target is a
persistent server, so writing uploaded files to local disk is safe, and asked for
the image to be saved to disk in the same request that creates the course. That
changes several decisions below — most notably, `image_url` is no longer a
free-text validated string; it's a server-generated path from an uploaded file.

## What I found

- `Courses` model ([prisma/schema.prisma:64-71](prisma/schema.prisma#L64-L71)) has no image field today; adding one needs a migration. Nothing from the original plan was implemented — no `image_url` anywhere in `prisma/schema.prisma` or `src/`, and no migration past `20250605105732_init`.
- `Course` interface ([src/presentation/interfaces/course.interface.ts](src/presentation/interfaces/course.interface.ts)) mirrors the model 1:1 and is passed straight into Prisma by the service — no field-by-field mapping to update.
- `createCourse`/`updateCourse` in [src/presentation/services/course.service.ts:39-62](src/presentation/services/course.service.ts#L39-L62) and [:88-111](src/presentation/services/course.service.ts#L88-L111) do `prisma.courses.create({ data: course })` / `.update({ data: courseData })` — the whole object is forwarded, so the service layer needs no field-mapping changes, only the new file-handling logic described below.
- `createCourse` validation lives in [src/presentation/courses/routes.ts:15-25](src/presentation/courses/routes.ts#L15-L25) (`express-validator` `check()` chains), and the controller builds `courseData` from `req.body` in [src/presentation/courses/controllers.ts:17-27](src/presentation/courses/controllers.ts#L17-L27) — `updateCourse` follows the identical pattern at [controllers.ts:43-55](src/presentation/courses/controllers.ts#L43-L55) and [routes.ts:48-58](src/presentation/courses/routes.ts#L48-L58).
- **No file-upload library is installed.** `package.json` has no `multer` (or equivalent). The app only parses JSON/urlencoded bodies ([src/presentation/server.ts:57-58](src/presentation/server.ts#L57-L58)), not `multipart/form-data` — this is new middleware, not a config change.
- **Static serving already exists and needs no changes.** `express.static(this.publicPath)` in [src/presentation/server.ts:61](src/presentation/server.ts#L61) serves `public/` (the default `public_path`) at the app root. A file saved to `public/images/<name>` is reachable at `<API_URL>/images/<name>` automatically.
- `public/` currently contains only `index.html` — the `images/` subfolder doesn't exist yet and needs to be created (and must survive `npm run build`'s `rimraf ./dist` — it's outside `dist`, so it's unaffected by the build/clean step).
- `deleteCourse` in [course.service.ts:113-132](src/presentation/services/course.service.ts#L113-L132) currently only deletes the DB row — it has no file cleanup, which matters once courses can own a file on disk (see Scope/Out).

## Scope

**In:**
- An **optional** `image_url` field on `Courses` (nullable), populated by saving an uploaded file to disk when a course is created.
- File upload accepted via `multipart/form-data` on `POST /create`, using `multer` with disk storage, saving into `public/images/`.
- On successful create, the generated relative path (e.g. `/images/<generated-filename>.jpg`) is stored in `image_url` and returned in the response.
- Creating a course with no file attached still succeeds; `image_url` is `null`.
- Updating a course's image via `PUT /:id`: if a new file is attached, save it, update `image_url`, and delete the previous file from disk if one existed.
- `image_url` returned in all existing course read endpoints (`GET /courses`, `GET /:id`, `GET /search`) automatically, since they already `return` the full Prisma row.
- Basic validation on the uploaded file: image MIME type only, and a size limit (`multer`'s built-in `fileFilter` / `limits`).

**Out:**
- Deleting a course's image file when the course itself is deleted (`deleteCourse`) — not requested; note this as a known gap below rather than silently adding scope.
- Image resizing/optimization/thumbnailing.
- Cloud storage (S3/Cloudinary/etc.) — explicitly local disk per the deployment-target answer.
- Backfilling `image_url` for any pre-existing courses (schema change adds it as nullable, so no backfill is required regardless).
- Serving different image sizes/formats per client.

## Data changes

Add a nullable `image_url` string field to the `Courses` model in `prisma/schema.prisma`, alongside `name`/`description`/`level`. Needs a migration (`npx prisma migrate dev --name add_course_image_url`). Because the field is nullable, no backfill decision is needed even if rows already exist.

## Steps

- [ ] **1. Add `image_url` to the Prisma schema and migrate.** File: `prisma/schema.prisma`. Add `image_url String?` (nullable) to the `Courses` model (near `description`, [schema.prisma:67](prisma/schema.prisma#L67)). Run the migration.

- [ ] **2. Install and configure `multer`.** Add `multer` (and `@types/multer` as a dev dependency) to `package.json`. Configure `multer.diskStorage` with a destination of `public/images/` and a generated filename (avoid trusting the client's original filename directly — e.g. combine a timestamp/uuid with the original extension). Add a `fileFilter` restricting to image MIME types and a `limits.fileSize`. Decide where this config lives — a new small module (e.g. `src/config/`) is consistent with how `src/config/jwt.adapter.ts` and `src/config/bcrypt.adapter.ts` isolate other cross-cutting setup.

- [ ] **3. Ensure `public/images/` exists.** The directory needs to exist before `multer` can write to it (either committed with a `.gitkeep`, or created at startup) — check how `Server`'s `publicPath` is resolved in [server.ts:22-24](src/presentation/server.ts#L22-L24) and [server.ts:71](src/presentation/server.ts#L71) (`path.join(__dirname + ...)`) to make sure the upload destination path resolves the same way relative to the compiled `dist/` output, not just in dev.

- [ ] **4. Add `image_url` to the `Course` interface.** File: `src/presentation/interfaces/course.interface.ts`. Add `image_url?: string | null` alongside the existing fields.

- [ ] **5. Wire the upload middleware into the create route.** File: `src/presentation/courses/routes.ts`. In the `POST /create` chain ([routes.ts:15-25](src/presentation/courses/routes.ts#L15-L25)), insert the `multer` single-file middleware (e.g. `upload.single('image')`) before the `express-validator` checks, since `multer` is what populates `req.body` fields from a `multipart/form-data` request in the first place — the existing `check('name')`/`check('description')`/`check('level')` chains still apply unchanged, since those are still plain form fields, not the file itself.

- [ ] **6. Build `image_url` in the create controller.** File: `src/presentation/courses/controllers.ts`. In `createCourse` ([controllers.ts:17-27](src/presentation/courses/controllers.ts#L17-L27)), read the uploaded file off `req.file` (populated by `multer`), and if present, set `courseData.image_url` to the public path (e.g. `/images/${req.file.filename}`); if absent, leave it `null`/`undefined` per the optional-field decision.

- [ ] **7. Wire the same upload middleware into the update route.** File: `src/presentation/courses/routes.ts`. Same change as Step 5, applied to the `PUT /:id` chain ([routes.ts:48-58](src/presentation/courses/routes.ts#L48-L58)).

- [ ] **8. Handle image replacement in the update controller + service.** Files: `src/presentation/courses/controllers.ts` (`updateCourse`, [controllers.ts:43-55](src/presentation/courses/controllers.ts#L43-L55)) and `src/presentation/services/course.service.ts` (`updateCourse`, [course.service.ts:88-111](src/presentation/services/course.service.ts#L88-L111)). If a new file was uploaded: look up the course's current `image_url` before updating (the service already fetches the course via `checkCourseById` at [course.service.ts:90](src/presentation/services/course.service.ts#L90) — reuse that read), perform the DB update, then delete the old file from disk (`fs.unlink` on the resolved path) only after the DB update succeeds. If no new file is attached, `image_url` is left unchanged (don't null it out just because the field wasn't in this request).

## Acceptance criteria

- [ ] `POST /api/course/create` with a valid JWT, form fields, and an attached image file returns 200 with `image_url` set to a path under `/images/`.
- [ ] `POST /api/course/create` with no file attached still succeeds, with `image_url` as `null`.
- [ ] `POST /api/course/create` with a non-image file attached (e.g. a `.txt`) is rejected by the `fileFilter`.
- [ ] The saved file is reachable via a plain `GET` to `<API_URL><image_url>` (proving `express.static` picks it up with no extra route).
- [ ] `PUT /api/course/:id` with a new file attached replaces `image_url` and the old file no longer exists on disk afterward.
- [ ] `PUT /api/course/:id` with no file attached leaves the existing `image_url` untouched.
- [ ] `GET /api/course/:id`, `GET /api/course/courses`, and `GET /api/course/search` all include `image_url` (or `null`) on every course object.

## How to verify

1. Run the migration: `npx prisma migrate dev --name add_course_image_url`, confirm it applies cleanly.
2. Start the server (`npm run dev`).
3. `POST /api/course/create` as `multipart/form-data` with a valid JWT, `name`/`description`/`level` fields, and an attached image under the field name chosen in Step 5 — expect 200 with `image_url` populated.
4. Check `public/images/` on disk for the new file, and confirm `GET <API_URL>/images/<filename>` serves it.
5. Repeat create with no file — expect 200, `image_url: null`.
6. Repeat create with a `.txt` file attached — expect rejection (400 or the `fileFilter` error, whichever `multer` error-handling ends up producing — decide and document this at Step 2/5).
7. `PUT /api/course/:id` with a new file — confirm `image_url` changed and the old file is gone from `public/images/`.
8. `GET /api/course/courses` — confirm `image_url` appears (or `null`) on every course.
9. Check the row directly in Postgres (`SELECT id, name, image_url FROM "Courses";`) to confirm the value persisted.

## Decisions & open questions

- **Deployment target confirmed as a persistent server/VPS** — local disk storage under `public/images/` is safe; files survive restarts.
- **Upload happens inline with course creation**, not as a separate "upload then attach" step — per the developer's answer, the image is saved at the same time the course is created, via `multipart/form-data` on `POST /create` (and `PUT /:id` for replacement).
- **`image_url` is optional, not required** — a deliberate change from the original version of this plan. Course creation succeeds with no image attached.
- **Old file cleanup on update: yes** — replacing a course's image on `PUT /:id` deletes the previous file from disk, per the developer's answer.
- **Open: what happens to a course's image file when the course itself is deleted?** Not addressed in this pass (see Scope/Out) — `deleteCourse` will leave an orphaned file in `public/images/` after this plan. Flag for a follow-up plan if it matters.
- **Open: exact multipart field name and error-response shape for upload failures** (wrong MIME type, file too large) aren't pinned down — decide during Step 2/5 and keep it consistent with the existing `handleError` / `CustomError` pattern where possible, though `multer` errors surface before `express-validator` runs.

---

**Reminder:** scope is limited to what's listed under "In" above. Anything under "Out" is deliberately not part of this plan.
