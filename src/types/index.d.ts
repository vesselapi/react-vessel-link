export interface Vessel {
  init: (options: object) => void;
  open: () => void;
}

declare global {
  interface Window {
    Vessel: Vessel;
  }
}
