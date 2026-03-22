/**
 * AeryFlux Design Tokens - TypeScript Definitions
 */

export interface Colors {
  primary: string;
  secondary: string;
  bg: {
    base: string;
    elevated: string;
    subtle: string;
  };
  text: {
    primary: string;
    secondary: string;
    muted: string;
  };
  success: string;
  error: string;
  warning: string;
  info: string;
  border: string;
}

export interface Typography {
  fonts: {
    display: string;
    body: string;
    mono: string;
  };
  sizes: {
    xs: string;
    sm: string;
    base: string;
    lg: string;
    xl: string;
    '2xl': string;
    '3xl': string;
    '4xl': string;
  };
  weights: {
    normal: number;
    medium: number;
    semibold: number;
    bold: number;
  };
  leading: {
    tight: number;
    normal: number;
    relaxed: number;
  };
}

export interface Spacing {
  1: string;
  2: string;
  3: string;
  4: string;
  6: string;
  8: string;
  12: string;
  16: string;
}

export interface Borders {
  radius: {
    sm: string;
    md: string;
    lg: string;
    full: string;
  };
  width: string;
}

export interface Effects {
  shadow: {
    sm: string;
    md: string;
    lg: string;
  };
  glow: {
    primary: string;
    secondary: string;
  };
}

export interface Animation {
  duration: {
    fast: string;
    normal: string;
    slow: string;
  };
  easing: {
    default: string;
    bounce: string;
  };
  keyframes: {
    pulse: string;
    glow: string;
    fadeIn: string;
    slideUp: string;
    spin: string;
  };
}

export interface Layout {
  maxWidth: string;
  gutter: string;
  breakpoints: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
}

export interface DesignTokens {
  colors: Colors;
  typography: Typography;
  spacing: Spacing;
  borders: Borders;
  effects: Effects;
  animation: Animation;
  layout: Layout;
}

export declare const colors: Colors;
export declare const typography: Typography;
export declare const spacing: Spacing;
export declare const borders: Borders;
export declare const effects: Effects;
export declare const animation: Animation;
export declare const layout: Layout;

declare const tokens: DesignTokens;
export default tokens;
