import * as React from 'react';
import { PiletApi } from 'my-app';
import CustomerDetails from './components/CustomerDetails/CustomerDetails';

export function setup(app: PiletApi) {
  app.showNotification('Hello from Piral!', {
    autoClose: 2000,
  });
  app.registerMenu(() =>
    <a href="https://docs.piral.io" target="_blank">Documentation</a>
  );
  app.registerTile(() => <CustomerDetails />, {
    initialColumns: 2,
    initialRows: 1,
  });
}
