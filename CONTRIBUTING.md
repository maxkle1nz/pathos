# Contributing

PATHOS contributions should improve continuity, safety, or proof.

Before opening a PR:

1. Keep the skill small and operational.
2. Do not add secret values to examples.
3. Preserve the distinction between proven state and narrative.
4. Expect CI to run on Node 24.
5. Run:

```bash
npm run lint:docs
npm run test:cli
npm run build
```

Good changes:

- clearer handoff sections;
- better no-secret rules;
- better next-agent prompt structure;
- stronger known-problems capture;
- safer install docs;
- accessibility or responsive improvements to the landing page.

Avoid:

- mystical claims;
- vague "AI memory" language;
- hardcoded private paths in public examples;
- huge generated assets;
- noisy widgets in the main README.
