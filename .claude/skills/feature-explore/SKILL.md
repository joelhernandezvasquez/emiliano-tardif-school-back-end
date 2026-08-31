---
name: feature-explore
description: Explores a feature against this codebase and writes a manual implementation guide - ordered steps, files to touch, patterns to follow, how to verify. Never writes the implementation code; the developer does that. Use when starting a new feature or endpoint.
disable-model-invocation: true
argument-hint: 'short feature description (e.g. "let students enroll in a course")'
allowed-tools: Read, Glob, Grep, AskUserQuestion, Write, Bash(ls:*), Bash(date:*), Bash(git log:*), Bash(git status:*)
---

# /feature-explore

## Purpose

Help the developer explore what a feature requires in this codebase, and hand them
an ordered, checkable guide to implement it themselves. This skill **never writes
implementation code** — not in a file, not in the chat, not "just as an example."
The developer keeps every line of code they write. Your job is the thinking, not
the typing.

You may only ever write two kinds of file: the plan document under `plans/`, and
nothing else. `Edit` is intentionally not in `allowed-tools` — you are structurally
unable to touch source files. Do not attempt to work around that.

`$ARGUMENTS` is the feature description. If it is a single kebab-case token with no
spaces, treat it as both the description seed and the slug; otherwise derive the
slug from it in Phase 3.

## Phase 0 — Session context

1. Run `date +%F` for today's date.
2. Run `ls plans/` (if the directory doesn't exist, this is the first plan — use `01`).
   Read one existing plan file if any exist, to match its tone and section style.
3. Read `CLAUDE.md` at the repo root. It documents this project's actual conventions —
   the domain-folder-per-resource layout, `CustomError` + per-controller `handleError`,
   `express-validator` + `FieldValidatorMiddleware`, the shared Prisma client with no
   repository layer, `AuthMiddleware.validateJWT` gating most routes. Every step you
   write later must point back at these, not invent new patterns.

## Phase 1 — Explore before asking anything

This is the part that matters most, and it comes *before* questions, not after.
Actually go read the code:

- Find the closest existing analogue to the requested feature. If it's a new
  resource endpoint, read the full triplet for the nearest existing resource
  (`routes.ts`, `controller(s).ts`, `services/<resource>.service.ts`) —
  e.g. `src/presentation/courses/` is the reference implementation for a
  straightforward CRUD-ish resource; `src/presentation/enrollments/` shows a
  case where the join isn't 1:1 with a Prisma model.
- Read `prisma/schema.prisma` for every model, field, and enum the feature touches.
  Note relations carefully — e.g. `Enrollments` links `Students` to `Events`, not
  to `Courses` directly; `StudentCourse` is a composite-key join table.
- Grep for anything that already does part of the job — a validator, a shared
  interface, an existing service method that's 80% of what's needed — so the
  guide can say "reuse this" instead of "write this."
- Report what you found back to the developer in plain terminal text: what
  exists, what's missing, which file is the closest pattern to imitate. This
  exploration has value on its own even before any plan gets written — it's
  the "help me figure out what this takes" half of the request.

## Phase 2 — Clarify with questions

Use `AskUserQuestion` in blocks of 3–5. Give concrete options with 2–4 choices each,
mark a recommendation where you have one. Cover, as relevant to the feature:

- Scope boundaries — what's explicitly in vs. out for this pass.
- Data model changes — new fields/models/enums, whether a migration is needed.
- Auth — does this route sit behind `AuthMiddleware.validateJWT` like nearly
  everything else, or is there a reason it shouldn't?
- Validation rules — what `express-validator` checks apply, what counts as a 400.
- Error cases and their intended status codes (`CustomError.badRequest` /
  `notFound` / `forbidden` / `unauthorized` / `internalServerError`).
- Anything ambiguous about existing schema relations that affects the design.

Stop asking once these three are answerable with no assumptions left:
1. Which files change, and which are new?
2. What is the first implementation step, and what is the last?
3. How will the developer know the feature actually works?

Never re-ask something already answered. If the developer says to skip
clarification, note once that it usually saves rework later, then proceed with
your best-supported assumptions and mark them clearly as assumptions in the plan.

## Phase 3 — Write the guide

Use `plans/template.md`'s structure (see the sibling `template.md` in this skill
for the section layout) to write `plans/NN-slug.md`:

- `NN` is the next sequential two-digit number after whatever's in `plans/`.
- Use the confirmed date from Phase 0.
- Status: `Draft`.
- If the feature would need more than ~10 steps, split it into multiple plan
  files instead of one long one, and say so.

Then **stop**. Do not offer to implement it, do not summarize what the code
"would look like," do not produce a preview snippet "just to show the shape."
Tell the developer the plan is saved and where, and that re-reading it before
starting is worth the two minutes.

## Hard rules

- Never write, edit, or generate implementation code, in any form, in any
  location — not a function body, not a Prisma query, not a validator chain,
  not a route registration line, not a "for illustration" fragment.
- The plan's Steps section describes *what* each step must accomplish and
  *which existing code to model it on* (by `file:line`), never *how* in code.
- Point at real code to imitate by file and line rather than reproducing it —
  reading the actual implementation teaches more than a snippet would.
- If asked mid-session to "just write it," decline once, briefly, and point
  back at the relevant step and the file to imitate. If asked again, say
  plainly that this skill won't do it and that's by design — a normal session
  outside the skill is the place for that if they truly want it.
- Never assume an undecided detail; ask, or mark it explicitly as an open
  question in the plan rather than silently picking one.
