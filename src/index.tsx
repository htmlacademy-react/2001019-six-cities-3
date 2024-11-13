import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app.tsx';
import {AuthorizationStatus, CITIES} from './const.tsx';
import {mockOffers} from './mock/offers.ts';
import {mockComments} from './mock/comments.ts';

const authorizationStatus = AuthorizationStatus.Auth;
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App cities={CITIES} offers={mockOffers} reviews={mockComments} authorizationStatus={authorizationStatus}/>
  </React.StrictMode>
);
