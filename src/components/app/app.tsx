import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const.tsx';
import Main from '../../pages/main/main.tsx';
import Login from '../../pages/login/login.tsx';
import Offer from '../../pages/offer/offer.tsx';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen.tsx';
import PivateRoute from '../pivate-route/pivate-route.tsx';
import Favorites from '../../pages/favorites/favorites.tsx';
import Layout from "../layout/layout.tsx";

// type AppProps = {
//   offersCount: number;
// }

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Root}
          element={<Layout />}
        >
          <Route
            index
            element={<Main />}
          />
          <Route
            path={AppRoute.Favorites}
            element={
              <PivateRoute
                authorizationStatus={AuthorizationStatus.NoAuth}
              >
                <Favorites />
              </PivateRoute>
            }
          />
          <Route
            path={AppRoute.Offer}
            element={<Offer />}
          />
          <Route
            path={AppRoute.Login}
            element={<Login />}
          />
          <Route
            path='*'
            element={<NotFoundScreen />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;