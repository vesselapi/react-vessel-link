import React from "react";

import useVessel from "./useVessel";

export default function VesselConnectButton({
  children = "Connect CRM",
  style,
  className,
}) {
  const { error, open } = useVessel();


  return (
    <div>
      <button
        disabled={Boolean(error)}
        type="button"
        className={className}
        style={{
          padding: "6px 4px",
          outline: "none",
          background: "#FFFFFF",
          border: "2px solid #F1F1F1",
          borderRadius: "4px",
          ...style,
        }}
        onClick={() => open()}
      >
        {children}
      </button>
    </div>
  );
}

VesselConnectButton.displayName = "VesselConnectButton";
