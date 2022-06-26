export enum IntegrationId {
  Salesforce = 'salesforce',
  HubSpot = 'hubspot',
  Pipedrive = 'pipedrive',
}

export interface ClientConfig {
  onSuccess: (publicToken: string, integrationId: IntegrationId) => void;
  onClose?: () => void;
  onLoad?: () => void;
}

export interface VesselConfig {
  onClose?: () => void;
  onLoad?: () => void;
}

export interface Vessel {
  init: (options: VesselConfig) => void;
  open: ({
    integrationId,
    linkToken, // Token used to verify user's account.
  }: {
    integrationId?: IntegrationId;
    linkToken: string;
  }) => void;
}

declare global {
  interface Window {
    Vessel: Vessel;
  }
}
