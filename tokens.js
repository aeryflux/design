/**
 * AeryFlux Design Tokens
 * @description JavaScript tokens for the AeryFlux design system
 */

export const colors = {
  // Brand
  primary: '#00ff88',
  secondary: '#00d4ff',

  // Surfaces
  bg: {
    base: '#050508',
    elevated: '#0a0a0f',
    subtle: '#111118',
  },

  // Text
  text: {
    primary: '#ffffff',
    secondary: '#a0a0a0',
    muted: '#666666',
  },

  // Semantic
  success: '#00ff88',
  error: '#ff4444',
  warning: '#ffaa00',
  info: '#00d4ff',

  // Borders
  border: '#1a1a1f',
};

export const typography = {
  fonts: {
    display: "'HemiHead', system-ui, sans-serif",
    body: "'Inter', system-ui, sans-serif",
    mono: "'JetBrains Mono', 'Fira Code', monospace",
  },

  sizes: {
    xs: '0.75rem',
    sm: '0.875rem',
    base: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '2rem',
    '4xl': '2.5rem',
  },

  weights: {
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },

  leading: {
    tight: 1.25,
    normal: 1.5,
    relaxed: 1.75,
  },
};

export const spacing = {
  1: '0.25rem',
  2: '0.5rem',
  3: '0.75rem',
  4: '1rem',
  6: '1.5rem',
  8: '2rem',
  12: '3rem',
  16: '4rem',
};

export const borders = {
  radius: {
    sm: '4px',
    md: '8px',
    lg: '12px',
    full: '9999px',
  },
  width: '1px',
};

export const effects = {
  shadow: {
    sm: '0 1px 2px rgba(0, 0, 0, 0.5)',
    md: '0 4px 6px rgba(0, 0, 0, 0.5)',
    lg: '0 10px 15px rgba(0, 0, 0, 0.5)',
  },
  glow: {
    primary: '0 0 20px rgba(0, 255, 136, 0.3)',
    secondary: '0 0 20px rgba(0, 212, 255, 0.3)',
  },
};

export const animation = {
  duration: {
    fast: '100ms',
    normal: '200ms',
    slow: '300ms',
  },
  easing: {
    default: 'cubic-bezier(0.4, 0, 0.2, 1)',
    bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
  },
  keyframes: {
    pulse: 'aery-pulse',
    glow: 'aery-glow',
    fadeIn: 'aery-fade-in',
    slideUp: 'aery-slide-up',
    spin: 'aery-spin',
  },
};

export const layout = {
  maxWidth: '1200px',
  gutter: '24px',
  breakpoints: {
    mobile: '640px',
    tablet: '1024px',
    desktop: '1200px',
  },
};

// Default export with all tokens
export default {
  colors,
  typography,
  spacing,
  borders,
  effects,
  animation,
  layout,
};
