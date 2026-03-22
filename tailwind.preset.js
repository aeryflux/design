/**
 * AeryFlux Design System - Tailwind CSS Preset
 *
 * Usage:
 *   // tailwind.config.js
 *   module.exports = {
 *     presets: [require('@aeryflux/design/tailwind')]
 *   }
 */

import { colors, typography, spacing, borders, effects, animation, layout } from './tokens.js';

/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
      colors: {
        primary: colors.primary,
        secondary: colors.secondary,
        success: colors.success,
        error: colors.error,
        warning: colors.warning,
        info: colors.info,
        border: colors.border,
        bg: {
          base: colors.bg.base,
          elevated: colors.bg.elevated,
          subtle: colors.bg.subtle,
        },
        text: {
          primary: colors.text.primary,
          secondary: colors.text.secondary,
          muted: colors.text.muted,
        },
      },

      fontFamily: {
        display: [typography.fonts.display],
        body: [typography.fonts.body],
        mono: [typography.fonts.mono],
      },

      fontSize: {
        xs: typography.sizes.xs,
        sm: typography.sizes.sm,
        base: typography.sizes.base,
        lg: typography.sizes.lg,
        xl: typography.sizes.xl,
        '2xl': typography.sizes['2xl'],
        '3xl': typography.sizes['3xl'],
        '4xl': typography.sizes['4xl'],
      },

      fontWeight: {
        normal: typography.weights.normal,
        medium: typography.weights.medium,
        semibold: typography.weights.semibold,
        bold: typography.weights.bold,
      },

      lineHeight: {
        tight: String(typography.leading.tight),
        normal: String(typography.leading.normal),
        relaxed: String(typography.leading.relaxed),
      },

      spacing: {
        1: spacing[1],
        2: spacing[2],
        3: spacing[3],
        4: spacing[4],
        6: spacing[6],
        8: spacing[8],
        12: spacing[12],
        16: spacing[16],
      },

      borderRadius: {
        sm: borders.radius.sm,
        md: borders.radius.md,
        lg: borders.radius.lg,
        full: borders.radius.full,
      },

      boxShadow: {
        sm: effects.shadow.sm,
        md: effects.shadow.md,
        lg: effects.shadow.lg,
        'glow-primary': effects.glow.primary,
        'glow-secondary': effects.glow.secondary,
      },

      transitionDuration: {
        fast: animation.duration.fast,
        normal: animation.duration.normal,
        slow: animation.duration.slow,
      },

      transitionTimingFunction: {
        default: animation.easing.default,
        bounce: animation.easing.bounce,
      },

      maxWidth: {
        screen: layout.maxWidth,
      },

      screens: {
        mobile: layout.breakpoints.mobile,
        tablet: layout.breakpoints.tablet,
        desktop: layout.breakpoints.desktop,
      },

      keyframes: {
        'aery-pulse': {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.05)', opacity: '0.8' },
        },
        'aery-glow': {
          '0%, 100%': { boxShadow: effects.glow.primary },
          '50%': { boxShadow: '0 0 30px rgba(0, 255, 136, 0.5)' },
        },
        'aery-fade-in': {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        'aery-slide-up': {
          from: { opacity: '0', transform: 'translateY(10px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },

      animation: {
        pulse: 'aery-pulse 2s ease-in-out infinite',
        glow: 'aery-glow 2s ease-in-out infinite',
        'fade-in': `aery-fade-in ${animation.duration.normal} ${animation.easing.default}`,
        'slide-up': `aery-slide-up ${animation.duration.slow} ${animation.easing.default}`,
      },
    },
  },
};
