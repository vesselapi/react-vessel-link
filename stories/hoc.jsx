import React from "react";

import { VesselConnectButton } from "../src/index.ts";

function App() {
  const onClose = (error, metadata) => console.log("onClose", error, metadata);
  const onLoad = (eventName, metadata) =>
    console.log("onLoad", eventName, metadata);
  const onSuccess = (token, metadata) =>
    console.log("onSuccess", token, metadata);

  return (
    <VesselConnectButton
      className="CustomButton"
      style={{ padding: "20px", fontSize: "16px", cursor: "pointer" }}
      onClose={onClose}
      onLoad={onLoad}
      onSuccess={onSuccess}
      linkToken="<TEST_API_TOKEN>"
    >
      Open Link and connect your CRM!
    </VesselConnectButton>
  );
}

export default App;
