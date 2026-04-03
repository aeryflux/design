# @aeryflux/design

> Minimalist design tokens and Tailwind preset for the AeryFlux ecosystem

## Philosophy

- **Minimal**: Only essential elements, no decoration
- **Dark-first**: Optimized for dark interfaces
- **Consistent**: Same tokens across all apps
- **Accessible**: High contrast, readable typography

## Installation

```bash
npm install @aeryflux/design
```

## Quick Start

### Option 1: Tailwind CSS Preset (Recommended)

```js
// tailwind.config.js
export default {
  presets: [require('@aeryflux/design/tailwind')],
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
}
```

### Option 2: CSS Custom Properties

```css
@import '@aeryflux/design/css';
```

### Option 3: JavaScript Tokens

```js
import { colors, typography, spacing } from '@aeryflux/design';
import tokens from '@aeryflux/design'; // or import all
```

### TypeScript Support

Full TypeScript definitions included:

```ts
import type { Colors, Typography, DesignTokens } from '@aeryflux/design';
```

## Design Tokens

### Colors

#### Brand

| Token | Value | Usage |
|-------|-------|-------|
| `--color-primary` | `#00ff88` | CTAs, accents, success states |
| `--color-secondary` | `#00d4ff` | Links, highlights, interactive |

#### Surfaces

| Token | Value | Usage |
|-------|-------|-------|
| `--color-bg-base` | `#050508` | Page background |
| `--color-bg-elevated` | `#0a0a0f` | Cards, modals, panels |
| `--color-bg-subtle` | `#111118` | Hover states, borders |

#### Text

| Token | Value | Usage |
|-------|-------|-------|
| `--color-text-primary` | `#ffffff` | Headings, important text |
| `--color-text-secondary` | `#a0a0a0` | Body text, descriptions |
| `--color-text-muted` | `#666666` | Captions, metadata |

#### Semantic

| Token | Value | Usage |
|-------|-------|-------|
| `--color-success` | `#00ff88` | Success, valid |
| `--color-error` | `#ff4444` | Errors, destructive |
| `--color-warning` | `#ffaa00` | Warnings, caution |
| `--color-info` | `#00d4ff` | Information |

### Typography

#### Font Families

| Token | Value | Usage |
|-------|-------|-------|
| `--font-display` | `'HemiHead', system-ui` | Headings, brand |
| `--font-body` | `'Inter', system-ui` | Body text |
| `--font-mono` | `'JetBrains Mono', monospace` | Code, data |

#### Font Sizes

| Token | Value | Usage |
|-------|-------|-------|
| `--text-xs` | `0.75rem` | Captions |
| `--text-sm` | `0.875rem` | Small text |
| `--text-base` | `1rem` | Body |
| `--text-lg` | `1.125rem` | Large body |
| `--text-xl` | `1.25rem` | Small headings |
| `--text-2xl` | `1.5rem` | Headings |
| `--text-3xl` | `2rem` | Large headings |
| `--text-4xl` | `2.5rem` | Display |

#### Font Weights

| Token | Value |
|-------|-------|
| `--font-normal` | `400` |
| `--font-medium` | `500` |
| `--font-semibold` | `600` |
| `--font-bold` | `700` |

### Spacing

Base unit: `4px`

| Token | Value |
|-------|-------|
| `--space-1` | `0.25rem` (4px) |
| `--space-2` | `0.5rem` (8px) |
| `--space-3` | `0.75rem` (12px) |
| `--space-4` | `1rem` (16px) |
| `--space-6` | `1.5rem` (24px) |
| `--space-8` | `2rem` (32px) |
| `--space-12` | `3rem` (48px) |
| `--space-16` | `4rem` (64px) |

### Borders

| Token | Value |
|-------|-------|
| `--radius-sm` | `4px` |
| `--radius-md` | `8px` |
| `--radius-lg` | `12px` |
| `--radius-full` | `9999px` |
| `--border-width` | `1px` |
| `--border-color` | `#1a1a1f` |

### Effects

| Token | Value |
|-------|-------|
| `--shadow-sm` | `0 1px 2px rgba(0,0,0,0.5)` |
| `--shadow-md` | `0 4px 6px rgba(0,0,0,0.5)` |
| `--shadow-lg` | `0 10px 15px rgba(0,0,0,0.5)` |
| `--glow-primary` | `0 0 20px rgba(0,255,136,0.3)` |
| `--glow-secondary` | `0 0 20px rgba(0,212,255,0.3)` |

### Animation

| Token | Value |
|-------|-------|
| `--duration-fast` | `100ms` |
| `--duration-normal` | `200ms` |
| `--duration-slow` | `300ms` |
| `--easing-default` | `cubic-bezier(0.4, 0, 0.2, 1)` |
| `--easing-bounce` | `cubic-bezier(0.68, -0.55, 0.265, 1.55)` |

## Guidelines

### Layout

- Max content width: `1200px`
- Grid: 12 columns, `24px` gutter
- Mobile breakpoint: `640px`
- Tablet breakpoint: `1024px`

### Components

#### Buttons

```
Primary:   bg-primary, text-bg-base, hover:glow-primary
Secondary: bg-transparent, border-primary, text-primary
Ghost:     bg-transparent, text-secondary, hover:bg-subtle
```

#### Inputs

```
Default:   bg-bg-elevated, border-color, text-primary
Focus:     border-primary, glow-primary
Error:     border-error
```

#### Cards

```
Default:   bg-bg-elevated, radius-lg, border-color
Hover:     border-primary (subtle)
```

### Inspiration

- [OpenClaw](https://openclaw.ai) - Minimalist dark UI
- Focus on content, not decoration
- Subtle gradients and glows for depth
- High contrast for readability

## Apps Using This System

| App | Description |
|-----|-------------|
| Lumos | Landing page |
| Haki | Learn-to-code |
| Atlas | Mobile globe app |
| Holocron | Admin panel |

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines on adding tokens, surfaces,
and submitting pull requests.

## Changelog

See [CHANGELOG.md](./CHANGELOG.md) for a full list of changes by version.

## License

[MIT](./LICENSE)
