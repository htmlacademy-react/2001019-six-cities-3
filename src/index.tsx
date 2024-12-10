import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';
import App from './components/app/app.tsx';
import {AuthorizationStatus} from './const.tsx';
import {store} from './store';
import ErrorMessage from './components/ui/error-message/error-message.tsx';
import {checkAuthAction, fetchOffersAction} from './store/api-actions.ts';

const authorizationStatus = AuthorizationStatus.Auth;

store.dispatch(fetchOffersAction());
store.dispatch(checkAuthAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ErrorMessage />
      <App
        authorizationStatus={authorizationStatus}
      />
    </Provider>
  </React.StrictMode>
);
