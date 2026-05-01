---
name: pathos
description: >-
  Use when a long human/agent session needs to preserve and transfer its working
  relationship, project state, access paths, operating doctrine, proof standard,
  known problems, emotional/intellectual cadence, and next-agent prompt into
  another chat, agent, model, repo, or project. Trigger when the user asks to
  transfer consciousness, pathos, vibe, continuity, handoff, session memory,
  agent doctrine, working style, or prevent drift between sessions.
---

# PATHOS

PATHOS is a total handoff protocol for preserving the observable continuity of a
human/agent collaboration. It does not claim to transfer literal consciousness or
hidden memory. It turns the session's working relationship, judgment patterns,
access map, proof rules, and next moves into artifacts another agent can use.

## Core Rule

Transfer pathos as operational truth: what was proven, how trust was built, how
the user thinks, how the agent should decide, what paths and tools matter, what
is still unknown, and what the next agent must do first.

Never transfer secrets. Record secret names, environment variable names, vault
locations, connector names, or setup paths only. Do not write token values,
passwords, private keys, cookies, or credentials.

## When Invoked

Create or update the smallest durable handoff artifact that fits the project:

- Existing repo convention: update its current `AGENT_HANDOFF.md`, `PATHOS.md`,
  `AGENT_BEHAVIOR_DOCTRINE.md`, or equivalent.
- Docs directory exists: prefer `docs/PATHOS.md` or `docs/AGENT_HANDOFF.md`.
- No convention exists: create `PATHOS.md` at the project root.
- User wants a prompt only: produce a copy/paste next-agent prompt instead of
  editing files.
- User wants universal reuse: create or update a skill, doctrine, or template
  in the requested shared location.
- User wants session hygiene, cleanup, or a lighter next Codex window: run
  Custodian Mode.

If an existing handoff file exists, read it before editing. Preserve still-true
continuity and replace stale claims with dated, concrete state.

## Custodian Mode

Use this mode when the user says a session is getting slow, heavy, impossible to
use, or asks PATHOS to clean, backup, archive, sanitize, or prepare a fresh
window.

Custodian Mode is backup-first and confirmation-gated:

1. Write or refresh the PATHOS handoff before any cleanup.
2. Inventory candidate session artifacts, generated outputs, logs, proof
   bundles, caches, screenshots, or old workspace folders with read-only
   commands first.
3. Present a compact ASCII/ANSI-style report with age, size, purpose, risk, and
   proposed action.
4. Create a sanitized backup bundle or manifest before cleanup when feasible.
5. Run cleanup as `dry-run` first.
6. Ask for explicit user approval before deleting or moving anything.
7. Never delete unknown Codex internal history, secrets, credentials, or user
   work. If the path is ambiguous, stop and ask.
8. Prefer reversible moves to a dated archive over permanent deletion.

Suggested terminal report shape:

```text
✦ PATHOS CUSTODIAN

SESSION / ARTIFACT              AGE      SIZE      STATUS
current-work                    now      --        handoff ready
old-runs/                       12d      1.4GB     archive candidate
screenshots/                    9d       220MB     dry-run clean

[1] write handoff   [2] backup sanitized
[3] dry-run clean   [4] request approval
```

Do not claim Codex has been cleaned unless cleanup actually ran and the affected
paths are named in the final report.

When this skill is available from the PATHOS repo, prefer the executable CLI for
local truth:

```bash
node bin/pathos.mjs status
node bin/pathos.mjs handoff --write docs/PATHOS.md
node bin/pathos.mjs custodian scan --dry-run
node bin/pathos.mjs custodian backup
node bin/pathos.mjs custodian clean --dry-run
```

## Workflow

1. Locate the truth surface.
   - Capture `git status -sb` when inside a repo.
   - Read existing handoff/docs/checkpoint/status files before writing.
   - If m1nd is available and the task involves structural discovery, use it
     first. If m1nd is stale or misses obvious repo knowledge, reingest the
     relevant docs/code and say so in the handoff.

2. Capture the north star.
   - State the user's real objective in one or two sentences.
   - Separate the big vision from the current proven capability.
   - Name explicit non-claims so the next agent does not overpromise.

3. Capture current state.
   - Repo path, branch, dirty state, latest checkpoint/release/proof, active
     build/output, important artifacts, active local servers, and next command.
   - Include exact local paths when the handoff is local-only. Label them
     `local-only` when they are not portable.

4. Capture human/agent pathos.
   - Preferred tone, pace, language, collaboration style, what creates trust,
     how to push back, when to celebrate, and when to slow down.
   - Encode the user's decision values, not just their preferences.

5. Capture operating doctrine.
   - How the agent should think, decide, scope, delegate, verify, and report.
   - Include any project method, phase rules, proof gates, or anti-drift rules.

6. Capture access map.
   - Repos, skills, MCPs/connectors, CLIs, commands, local services, ports,
     dashboards, docs, generated folders, proofs, run directories, and env var
     names.
   - Include "how to recover" notes for common failures.

7. Capture known problems.
   - Stale indexes, model quota limits, disk pressure, failing tests, flaky
     browser proof, path moves, dirty worktree, partial migrations, port
     conflicts, missing credentials, and anything previous agents misread.

8. Capture proof standard.
   - Define what counts as done. Prefer causal runtime proof, structured
     artifacts, tests, browser smoke, release/checkpoint gates, and exact
     commands over narrative confidence.

9. Write the next-agent prompt.
   - Include first files to read, first commands to run, what not to do, how to
     speak to the user, and the next likely action.

10. Validate the handoff.
   - No secret values.
   - No unsupported claims.
   - Dates/paths/branches are concrete.
   - The next agent can start within five minutes.

## Output Contract

Use these headings unless the project already has a stronger convention:

- `North Star`
- `Current State`
- `Human/Agent Pathos`
- `Operating Doctrine`
- `Access Map`
- `Known Problems`
- `Proof Standard`
- `Next Agent Prompt`
- `First Commands`
- `Do Not Do`
- `Open Questions`

## References

- For a full file template, read `references/pathos-handoff-template.md`.
- For a copy/paste prompt template, read `references/pathos-prompt-template.md`.

## Final Report

Report the path of the handoff artifact, what was captured, and any limitations.
If you skipped file edits because the user asked for text only, say that clearly.
