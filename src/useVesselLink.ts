import { useEffect } from 'react';
import useScript from 'react-script-hook';

import { ClientConfig } from './types';

const BASE_URL = 'https://cdn.vessel.land';

export default function useVesselLink(config: ClientConfig) {
  const [loading, error] = useScript({
    src: `${config.domain ?? BASE_URL}/init.js`,
    checkForExisting: true,
  });

  useEffect(() => {
    if (window.Vessel) {
      window.Vessel.init({
        ...config,
        onLoad: () => {
          config.onLoad && config.onLoad();
        },
        onClose: () => config.onClose && config.onClose(),
      });
    }
  }, [loading]);

  const open = ({
    linkToken,
    integrationId,
  }: {
    linkToken: string;
    integrationId?: string;
  }) => {
    if (error) {
      throw new Error(`Error loading Vessel script: ${error}`);
    }
    if (!window.Vessel) {
      console.error('Vessel is not initialized');
      return;
    }
    if (!window.Vessel.state?.isLoaded) {
      console.error('Vessel has not been loaded, did you call Vessel.init()?');
      return;
    }
    // Open modal
    window.Vessel.open({ integrationId, linkToken });
  };

  return {
    error,
    open,
  };
}
