# Contributing to @aeryflux/design

## Setup

```bash
git clone https://github.com/aeryflux/design.git
cd design
```

No build step required. All files are source-distributed.

## Adding Tokens

1. Add the CSS variable to `tokens.css` under the appropriate section
2. Add the JS export to `tokens.js`
3. Update the TypeScript definitions in `tokens.d.ts`
4. If relevant, add to `tailwind.preset.js`

## Adding Utilities

Add utility classes to the bottom of `tokens.css` under the appropriate section.

Naming conventions:
- Color utilities: `.bg-*`, `.text-*`, `.border-*`
- Layout utilities: `.flex`, `.grid`, `.gap-*`
- Effect utilities: `.glow-*`, `.shadow-*`
- Component utilities: `.aery-*` prefix (e.g., `.aery-grid`)

## Testing

Link locally to verify changes in consuming apps:

```bash
npm link
cd ../lumos && npm link @aeryflux/design
cd ../haki && npm link @aeryflux/design
```

## Pull Requests

- One feature per PR
- Update CHANGELOG.md
- Test in at least one consuming app before submitting
