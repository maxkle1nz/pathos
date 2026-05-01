# PATHOS Protocol Spec

PATHOS is a continuity protocol for long human/agent work.

## Principle

Transfer operational truth, not mythology.

The handoff should preserve:

- what was proven;
- what remains unproven;
- how the human and agent collaborate;
- what the next agent must read and run first;
- what tools, paths, skills, and MCPs matter;
- what traps caused previous drift.

## Required Sections

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

## Secret Policy

Do not record secret values. Record names and configuration locations only.

Good:

```text
OPENAI_API_KEY is required and is configured by the local shell environment.
```

Bad:

```text
OPENAI_API_KEY=<secret value>
```

## Done Criteria

A PATHOS handoff is valid when another agent can start within five minutes,
knows what not to claim, knows the first commands to run, and can preserve the
working relationship without inventing hidden context.

## CLI Contract

The public CLI exposes:

```bash
pathos status
pathos handoff --write docs/PATHOS.md
pathos custodian scan --dry-run
pathos custodian backup
pathos custodian clean --dry-run
```

Schemas:

- `pathos-session-status-v0`
- `pathos-handoff-write-v0`
- `pathos-custodian-scan-v0`
- `pathos-custodian-backup-v0`
- `pathos-custodian-clean-v0`

`custodian clean` is dry-run by default. With `--apply --yes`, PATHOS moves
cleanable artifacts into `.pathos/trash/<timestamp>` and writes a manifest. It
does not permanently delete files.

`handoff --write` and `custodian backup --out` refuse paths outside the current
repository.

## CI Runtime

The public repo verifies PATHOS on Node 24. CI runs:

```bash
npm ci
npm run lint:docs
npm run test:cli
npm run build
```

GitHub Pages also runs the CLI smoke test before building the static site. This
keeps the public landing page tied to an executable command surface instead of
documentation-only claims.
