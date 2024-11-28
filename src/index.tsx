import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';
import App from './components/app/app.tsx';
import {AuthorizationStatus} from './const.tsx';
import {store} from './store';

const authorizationStatus = AuthorizationStatus.Auth;
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        authorizationStatus={authorizationStatus} //зачем нужны эти пропсы если есть store??
        // как сделать так. чтобы при наведении перерисовывалась только карта города справа
      />
    </Provider>
  </React.StrictMode>
);
