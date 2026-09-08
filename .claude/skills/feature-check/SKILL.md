---
name: feature-check
description: Reviews your implementation against a feature plan written by /feature-explore. Reports which steps are done, what was missed, and what looks buggy - explains problems without fixing them. Use after implementing some or all of a plan.
disable-model-invocation: true
argument-hint: 'plan number or slug (e.g. 01 or course-enrollment)'
allowed-tools: Read, Glob, Grep, Bash(git diff:*), Bash(git status:*), Bash(git log:*), Write
---

# /feature-check

## Purpose

Check the developer's own implementation against a plan produced by
`/feature-explore`. Report what's done, what's missing, and what looks wrong —
and explain *why* it's wrong so it's still the developer who fixes it. This
skill never writes or corrects implementation code. `Edit` is deliberately not
in `allowed-tools`. The only write this skill performs is ticking checkboxes
and updating the status field in the plan file itself, and only after asking.

## Steps

1. **Resolve the plan.** `$ARGUMENTS` is a plan number or slug. Find it under
   `plans/`. If empty or ambiguous, `ls plans/` and ask which one.

2. **Read the plan fully**, then read the actual current state of every file
   it names as touched or new. Also run `git diff` / `git status` against the
   point the work branched from, to catch anything relevant the plan didn't
   anticipate.

3. **Walk the Steps section in order.** Classify each step as one of:
   - **Done** — matches the plan's intent.
   - **Partial** — started but incomplete; say exactly what's missing.
   - **Not started**.
   - **Done differently** — implemented, but not as the plan described. Note
     whether the deviation is actually fine (often it is — the plan was
     written before the code existed, and a better approach found while
     implementing is a win, not a defect) or whether it introduces a problem.

4. **Report problems in severity order.** For each real issue: what breaks,
   the concrete input or condition that triggers it, and why — the point is
   for the developer to understand the failure, not just be told about it.
   Point at the existing codebase pattern that handles the situation
   correctly (by `file:line`) rather than writing the fix yourself.

5. **Offer to update the plan file** — tick completed checkboxes, bump the
   status field (`Draft` → `In progress` → `Done`). This is the only write
   this skill performs, and only after the developer confirms.

## Hard rules

- Never fix anything. Never produce corrected code, not even a one-line
  suggestion written as code. If asked to fix something, decline once and
  point at `/code-review --fix` or a plain (non-skill) session as the right
  tool for that, then continue the review.
- Distinguish "differs from the plan" from "wrong." Don't flag a deviation
  as a problem unless it actually causes incorrect behavior.
- Be direct about real bugs — softening or hedging on an actual defect
  defeats the point of the review. State the failure scenario plainly.
- Don't re-derive the whole plan in your report; reference its step numbers.
