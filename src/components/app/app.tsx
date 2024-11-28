import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const.tsx';
import Main from '../../pages/main/main.tsx';
import Login from '../../pages/login/login.tsx';
import Offer from '../../pages/offer/offer.tsx';
import NotFound from '../../pages/not-found/not-found.tsx';
import PrivateRoute from '../private-route/private-route.tsx';
import Favorites from '../../pages/favorites/favorites.tsx';
import Layout from '../layout/layout.tsx';
import {useAppSelector} from '../../hooks';

type TAppProps = {
  authorizationStatus: AuthorizationStatus;
}

function App({authorizationStatus}: TAppProps) : JSX.Element {
  const cities = useAppSelector((state) => state.cities);
  const offers = useAppSelector((state) => state.offers);
  const reviews = useAppSelector((state) => state.reviews);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Root}
          element={<Layout />}
        >
          <Route
            index
            element={<Main cities={cities} offers={offers} />}
          />
          <Route
            path={AppRoute.Favorites}
            element={
              <PrivateRoute
                authorizationStatus={AuthorizationStatus.Auth}
              >
                <Favorites offers={offers} />
              </PrivateRoute>
            }
          />
          <Route
            path={AppRoute.Offer}
            element={<Offer cities={cities} offers={offers} reviews={reviews} authorizationStatus={authorizationStatus} />}
          />
          <Route
            path={AppRoute.Login}
            element={(
              <PrivateRoute authorizationStatus={authorizationStatus} isReverse>
                <Login />
              </PrivateRoute>
            )}
          />
          <Route
            path='*'
            element={<NotFound />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
