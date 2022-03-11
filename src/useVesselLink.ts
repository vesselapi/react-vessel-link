import { useEffect, useState } from "react";
import useScript from "react-script-hook";

export default function useVesselLink() {
  const [loading, error] = useScript({
    src: "https://cdn.vessel.land/init.js",
    checkForExisting: true,
  });

  const [popupLoaded, setPopupLoaded] = useState(false);

  useEffect(() => {
    if (!loading && window && window.Vessel) {
      window.Vessel.init({
        onLoaded: () => setPopupLoaded(true),
      });
    }
  }, [loading]);

  const open = () => {
    if (popupLoaded) {
      window.Vessel.open();
    }
  };

  return {
    error,
    open,
  };
}
