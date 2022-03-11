import useScript from "react-script-hook";

export default function useVessel() {
  const [loading, error] = useScript({
    src: "https://cdn.vessel.land/init.js",
    checkForExisting: true,
  });

  return {
    error: false,
    open: () => "",
  };
}
