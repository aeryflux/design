# Contributing to @aeryflux/design

Thank you for your interest in contributing to the AeryFlux design system. This guide explains
how the package is structured, how to add or modify tokens, and how to submit changes.

## Repository Structure

```
tokens.css          CSS custom properties (the source of truth)
tokens.js           JavaScript export of all design tokens
tokens.d.ts         TypeScript definitions for tokens
surfaces.css        Surface theme definitions (dark, green, white)
surfaces.js         JavaScript export of surface tokens
surfaces.d.ts       TypeScript definitions for surfaces
tailwind.preset.js  Tailwind CSS preset consuming the tokens
```

## Design Principles

- **Minimal** -- Only essential elements, no decoration.
- **Dark-first** -- Optimized for dark interfaces.
- **Consistent** -- The same tokens are used across every AeryFlux app.
- **Accessible** -- High contrast and readable typography.

## How to Add or Modify Tokens

1. **Define the CSS custom property** in `tokens.css` (or `surfaces.css` for surface tokens).
2. **Mirror the value** in the corresponding `.js` file so JavaScript consumers stay in sync.
3. **Update the TypeScript definitions** in the matching `.d.ts` file.
4. **Expose the token in the Tailwind preset** (`tailwind.preset.js`) if it maps to a Tailwind
   utility (color, spacing, font, etc.).
5. **Document the token** in `README.md` with its value and intended usage.

## Adding a New Surface

Surfaces live in `surfaces.css` and `surfaces.js`. Each surface is a set of CSS custom
properties scoped to a `[data-surface]` attribute value:

1. Add a new `[data-surface="your-name"]` block in `surfaces.css`.
2. Export the matching object in `surfaces.js`.
3. Add the TypeScript type to `surfaces.d.ts`.
4. Update the README surface table if applicable.

## Commit Convention

This project follows conventional commits:

```
feat(scope): description    # New token or feature
fix(scope): description     # Bug fix
docs: description           # Documentation change
chore: description          # Maintenance, tooling
refactor: description       # Code restructuring
```

All commit messages and PR descriptions must be in English.

## Submitting a Pull Request

1. Fork the repository and create a branch from `main`.
2. Make your changes following the steps above.
3. Verify that all token files (CSS, JS, TS) are in sync.
4. Open a pull request against `main` with a clear description of what changed and why.

## Reporting Issues

Use [GitHub Issues](https://github.com/aeryflux/design/issues) to report bugs or request
new tokens. Include the token name, expected value, and the app where the issue was observed.

## License

By contributing, you agree that your contributions will be licensed under the
[MIT License](./LICENSE).
