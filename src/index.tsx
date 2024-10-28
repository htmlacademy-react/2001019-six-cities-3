import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app.tsx';
import { AuthorizationStatus } from "./const.tsx";
import {mockOffers} from "./mock/offers.ts";

const authorizationStatus = AuthorizationStatus.NoAuth;
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
   <App offers={mockOffers} authorizationStatus={authorizationStatus}/>
  </React.StrictMode>
);

//входная точка приложения
