export interface ClientConfig {
  linkToken: string; // Token used to verify consumers account.
  onSuccess: (publicToken: string) => void;
  onClose?: () => void;
  onLoad?: () => void;
}

export interface VesselConfig {
  onLoad?: () => void;
  onClose?: () => void;
}

export interface Vessel {
  init: (options: VesselConfig) => void;
  open: (integrationId?: string) => void;
}

declare global {
  interface Window {
    Vessel: Vessel;
  }
}
