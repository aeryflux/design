/**
 * AeryFlux Surface System - TypeScript Definitions
 */

export type SurfaceId = 'dark' | 'green' | 'white';

export interface Surface {
  id: SurfaceId;
  name: string;
  primary: string;
  secondary: string;
  background: string;
  backgroundSubtle: string;
  backgroundElevated: string;
  text: string;
  textSecondary: string;
  textMuted: string;
  border: string;
  borderSolid: string;
  accent: string;
  accentGlow: string;
}

export type Surfaces = Record<SurfaceId, Surface>;

export declare const surfaces: Surfaces;
export declare const surfaceIds: SurfaceId[];
export declare const defaultSurface: SurfaceId;

export declare function getSurface(id: SurfaceId): Surface;

export default surfaces;
