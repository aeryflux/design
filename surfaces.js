/**
 * AeryFlux Surface System
 * 3 visual surfaces for consistent theming across all AeryFlux apps
 */

export const surfaces = {
  // Dark: black background, gray accents (neutral)
  dark: {
    id: 'dark',
    name: 'Dark',
    primary: '#888888',
    secondary: '#888888',
    background: '#000000',
    backgroundSubtle: '#050508',
    backgroundElevated: '#0a0a0f',
    text: '#ffffff',
    textSecondary: '#888899',
    textMuted: '#666677',
    border: 'rgba(136, 136, 136, 0.3)',
    borderSolid: '#333344',
    accent: '#888888',
    accentGlow: 'rgba(136, 136, 136, 0.3)',
  },

  // Green: dark green background, neon green accents (AeryFlux signature)
  green: {
    id: 'green',
    name: 'Green',
    primary: '#00ff88',
    secondary: '#00d4ff',
    background: '#050a08',
    backgroundSubtle: '#030805',
    backgroundElevated: '#0a0f0c',
    text: '#ffffff',
    textSecondary: '#88aa99',
    textMuted: '#557766',
    border: 'rgba(0, 255, 136, 0.2)',
    borderSolid: '#1a3328',
    accent: '#00ff88',
    accentGlow: 'rgba(0, 255, 136, 0.3)',
  },

  // White: light gray background, dark accents
  white: {
    id: 'white',
    name: 'Light',
    primary: '#1a1a1a',
    secondary: '#333333',
    background: '#e8e8e8',
    backgroundSubtle: '#d8d8d8',
    backgroundElevated: '#ffffff',
    text: '#1a1a1a',
    textSecondary: '#333333',
    textMuted: '#666666',
    border: 'rgba(0, 0, 0, 0.15)',
    borderSolid: '#cccccc',
    accent: '#1a1a1a',
    accentGlow: 'rgba(0, 0, 0, 0.1)',
  },
};

export const surfaceIds = ['dark', 'green', 'white'];
export const defaultSurface = 'dark';

/**
 * Get surface by id
 */
export function getSurface(id) {
  return surfaces[id] || surfaces.dark;
}

export default surfaces;
