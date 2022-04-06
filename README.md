# react-vessel-link

### This package provides:

1. A [React](https://reactjs.org/) button component that launches the [Vessel](https://vessel.land) connect modal.
2. A Hook that can be used to launch the modal manually.

### Installing:

_npm_:

```bash
npm install @vesselapi/react-vessel-link
```

_yarn_:

```bash
yarn add @vesselapi/react-vessel-link
```

### Usage

The `vessel-link` modal can be triggered using two methods:

1. Through the `VesselConnectButton` component.
2. Through the `useVesselLink` hook.

Here are some example uses of each:

```jsx
function App() {
  return (
    <VesselConnectButton
      linkToken={linkToken}
      onSuccess={(publicToken) => console.log("public token: ", publicToken)}
      onClose={() => console.log("closed")}
      onLoad={() => console.log("loaded")}
    >
      Connect your CRM!
    </VesselConnectButton>
  );
}
```

```js
function App() {
  const { open } = useVesselLink({
    linkToken,
    onSuccess: (publicToken) => console.log("public token: ", publicToken),
    onClose: () => console.log("closed"),
    onLoad: () => console.log("loaded"),
  });

  return <button onClick={() => open()}>Connect your CRM!</button>;
}
```

If you'd like to directly open to the auth flow for a specific integration without having the user go through the selection flow, you can pass an `integrationId` to the open function returned by `useVesselLink`. Currently, this is only supported when using the `useVesselLink` hook.

Here's an example of emeding the integrations directly into your application:

```jsx
function App() {
  const { open } = useVesselLink({
    linkToken,
    onSuccess: (publicToken) => console.log("public token: ", publicToken),
    onClose: () => console.log("closed"),
    onLoad: () => console.log("loaded"),
  });

  return (
    <div>
      <button
        onClick={() => open({ integrationId: IntegrationIds.Salesforce })}
      >
        Connect Salesforce
      </button>
      <button onClick={() => open({ integrationId: IntegrationIds.HubSpot })}>
        Connect HubSpot
      </button>
    </div>
  );
}
```

_Note_: `useVesselLink` must only be called once

### Issues/Questions

Contact us at `support@vessel.land`.
