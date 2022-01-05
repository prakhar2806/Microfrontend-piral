import * as React from 'react';
import { PiletApi } from 'my-app';
import UserDetails from './components/UserDetails/UserDetails';

export function setup(app: PiletApi) {
  app.showNotification('Hello from my newly created Piral!', {
    autoClose: 2000,
  });
  app.registerMenu(() =>
    <a href="https://docs.piral.io" target="_blank">Documentation</a>
  );
  app.registerTile(() => <UserDetails />, {
    initialColumns: 2,
    initialRows: 1,
  });
}
