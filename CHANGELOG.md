# Changelog

## [0.4.0] - 2026-04-03

### Added
- `--color-bg-deep` (#06060e) - shared html background token
- `--color-bg-tertiary` (#12121a)
- `--color-danger` (#ff3366)
- `--border-subtle`, `--border-hover`, `--border-glow` variants
- `--accent-glow` (rgba(0, 255, 136, 0.25))
- `--bg-card`, `--bg-glass`, `--bg-glass-blur` composite backgrounds
- `.aery-grid` - 40x40px grid overlay utility (extracted from haki)
- `.brand-name` - display font utility
- Base link styles, `::selection`, `:focus-visible`, `prefers-reduced-motion`
- html defaults: `color-scheme: dark`, `text-rendering`, `font-synthesis`
- LICENSE, CONTRIBUTING.md, CHANGELOG.md

### Removed
- Legacy surface switching on grid (data-surface selectors)

## [0.3.0] - 2026-04-03

### Added
- Surface system (dark, green, white) with CSS custom properties
- Surface utility classes
- Tailwind preset with full token mapping
- Animation keyframes and utility classes
- Layout, spacing, position utility classes

## [0.2.0] - 2026-03-31

### Added
- Tailwind CSS preset (`@aeryflux/design/tailwind`)
- Typography tokens (fonts, sizes, weights, line heights)
- Spacing scale and layout tokens

## [0.1.0] - 2026-03-28

### Added
- Initial release
- Color tokens (brand, surfaces, text, semantic)
- CSS custom properties
- Base reset styles
