import useVesselLink from "./useVesselLink";

export default function VesselConnectButton({
  children = "Connect CRM",
  style,
  className,
}: {
  children?: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
}) {
  const { error, open } = useVesselLink();

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
