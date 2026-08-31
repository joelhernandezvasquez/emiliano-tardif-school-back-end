<!--
Template for plans/NN-slug.md, written by /feature-explore.
Not a skill itself — read by feature-explore/SKILL.md for section structure.

Writing rules for whoever fills this in:
- One idea per sentence. No TODOs — resolve them before saving, or move them
  to "Decisions & open questions" as an explicit open question.
- The Steps section must never contain a code block. Describe files, function
  names, field names, and behavior in prose; point at existing code to
  imitate by file:line instead of pasting it.
- Each step must leave the app in a runnable, working state when finished —
  no step should require a later step to compile or boot.
-->

# Feature: <name>

**Date:** <YYYY-MM-DD>
**Status:** Draft
**Goal:** <one sentence — what this feature lets a user or caller do>

## What I found

<Exploration results from Phase 1. What already exists that's relevant, which
existing resource/file is the closest pattern to imitate, what's genuinely
new. Reference specific files with file:line.>

## Scope

**In:**
- <...>

**Out:**
- <...>

## Data changes

<Which Prisma models/fields/enums are added or changed, described in prose —
not as schema syntax. State plainly whether a migration is needed and,
if so, roughly what it must add.>

## Steps

- [ ] **1. <short title>** — File: `<path>`. <What this step must accomplish,
  in prose. Which existing file/function to model it on, by file:line. Any
  gotcha to watch for.>
- [ ] **2. ...**
- [ ] ...

## Acceptance criteria

- [ ] <boolean, checkable statement>
- [ ] ...

## How to verify

<Concrete steps: which request to send (method, path, body), the expected
status code and response shape, and anything to check in the database
afterward.>

## Decisions & open questions

- <what was settled, and why — or what's still open and needs a call before
  Step N can be finished>

---

**Reminder:** scope is limited to what's listed under "In" above. Anything
under "Out" is deliberately not part of this plan.
