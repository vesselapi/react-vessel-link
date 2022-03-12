import React from "react";

import { VesselConnectButton } from "../src/index.ts";

function App() {
  return (
    <VesselConnectButton
      className="CustomButton"
      style={{ padding: "20px", fontSize: "16px", cursor: "pointer" }}
    >
      Open Link and connect your CRM!
    </VesselConnectButton>
  );
}

export default App;
