# Contributing to @aeryflux/design

Thank you for your interest in contributing to the AeryFlux design system. This guide explains
how the package is structured, how to add or modify tokens, and how to submit changes.

## Repository Structure

```
tokens.css          CSS custom properties (the source of truth)
tokens.js           JavaScript export of all design tokens
tokens.d.ts         TypeScript definitions for tokens
surfaces.css        Surface theme definitions (legacy)
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

1. **Define the CSS custom property** in `tokens.css`.
2. **Mirror the value** in `tokens.js` so JavaScript consumers stay in sync.
3. **Update the TypeScript definitions** in `tokens.d.ts`.
4. **Expose the token in the Tailwind preset** (`tailwind.preset.js`) if it maps to a Tailwind utility.
5. **Document the token** in `README.md` with its value and intended usage.

## Testing Locally

Link locally to verify changes in consuming apps:

```bash
npm link
cd ../lumos && npm link @aeryflux/design
cd ../haki && npm link @aeryflux/design
```

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

1. Create a branch from `main`.
2. Make your changes following the steps above.
3. Verify that all token files (CSS, JS, TS) are in sync.
4. Test in at least one consuming app before submitting.
5. Open a pull request against `main` with a clear description.

## License

By contributing, you agree that your contributions will be licensed under the
[MIT License](./LICENSE).
