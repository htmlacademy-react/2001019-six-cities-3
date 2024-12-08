import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const.tsx';
import Main from '../../pages/main/main.tsx';
import Login from '../../pages/login/login.tsx';
import Offer from '../../pages/offer/offer.tsx';
import NotFound from '../../pages/not-found/not-found.tsx';
import PrivateRoute from '../private-route/private-route.tsx';
import Favorites from '../../pages/favorites/favorites.tsx';
import {useAppSelector} from '../../hooks';
import LoadingScreen from '../../pages/loading/loading-screen.tsx';

type TAppProps = {
  authorizationStatus: AuthorizationStatus;
}

function App({authorizationStatus}: TAppProps) : JSX.Element {
  const isOffersDataLoading = useAppSelector((state) => state.isOffersDataLoading);
  const cities = useAppSelector((state) => state.cities);
  const offers = useAppSelector((state) => state.offers);
  const reviews = useAppSelector((state) => state.reviews);

  if (isOffersDataLoading) {

    return(
      <LoadingScreen />
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          index
          element={<Main offers={offers} />}
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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
