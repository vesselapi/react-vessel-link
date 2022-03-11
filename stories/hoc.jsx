import React from "react";

import { SproutConnectLink } from "../src";

function App() {
  const onExit = (error, metadata) => console.log("onExit", error, metadata);
  const onEvent = (eventName, metadata) =>
    console.log("onEvent", eventName, metadata);
  const onSuccess = (token, metadata) =>
    console.log("onSuccess", token, metadata);

  return (
    <SproutConnectLink
      className="CustomButton"
      style={{ padding: "20px", fontSize: "16px", cursor: "pointer" }}
      token=""
      onExit={onExit}
      onSuccess={onSuccess}
      onEvent={onEvent}
    >
      Open Link and connect your CRM!
    </SproutConnectLink>
  );
}

export default App;
