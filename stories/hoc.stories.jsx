import React from 'react';

import App from './hoc';

export default {
  title: 'Hoc/VesselConnectButton',
  component: App,
};

function Template() {
  return <App />;
}

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'VesselConnectButton',
};
