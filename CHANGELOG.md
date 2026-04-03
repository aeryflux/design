# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.4.0] - 2026-04-03

### Added

- `--color-bg-deep` (#06060e) - shared html background token.
- `--color-bg-tertiary` (#12121a).
- `--color-danger` (#ff3366).
- `--border-subtle`, `--border-hover`, `--border-glow` border variants.
- `--accent-glow` (rgba(0, 255, 136, 0.25)).
- `--bg-card`, `--bg-glass`, `--bg-glass-blur` composite backgrounds.
- `.aery-grid` - 40x40px grid overlay utility (extracted from haki).
- `.brand-name` - display font utility.
- Base link styles, `::selection`, `:focus-visible`, `prefers-reduced-motion`.
- html defaults: `color-scheme: dark`, `text-rendering`, `font-synthesis`.
- LICENSE, CONTRIBUTING.md, CHANGELOG.md.

### Removed

- Legacy surface switching on grid (data-surface selectors).

## [0.3.0] - 2026-03-22

### Added

- Surface system with dark, green, and white themes (`surfaces.css`, `surfaces.js`).
- TypeScript definitions for surfaces (`surfaces.d.ts`).
- Tailwind CSS preset consuming all design tokens (`tailwind.preset.js`).
- Utility CSS classes for common patterns.
- Animation tokens (`duration-fast`, `duration-normal`, `duration-slow`, easing curves).
- Glow effect tokens (`glow-primary`, `glow-secondary`).

### Changed

- Package exports now include `./surfaces`, `./surfaces.css`, and `./tailwind` paths.
- npm publish configured for public access on the official registry.

## [0.2.0] - 2026-03-13

### Added

- JavaScript design tokens (`tokens.js`) mirroring CSS custom properties.
- TypeScript definitions (`tokens.d.ts`) for full type safety.

## [0.1.0] - 2026-03-13

### Added

- Initial CSS design tokens (`tokens.css`): colors, typography, spacing, borders, effects.
- README with token reference tables and usage examples.
