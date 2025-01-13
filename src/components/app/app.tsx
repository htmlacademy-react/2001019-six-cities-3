import {Route, Routes} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const.tsx';
import Main from '@/pages/main/main.tsx';
import Login from '@/pages/login/login.tsx';
import Offer from '@/pages/offer/offer.tsx';
import NotFound from '@/pages/not-found/not-found.tsx';
import PrivateRoute from '../private-route/private-route.tsx';
import Favorites from '@/pages/favorites/favorites.tsx';
import {useAppSelector} from '@/hooks';
import Loading from '@/pages/loading/loading.tsx';
import HistoryRouter from '../history-route/history-route.tsx';
import browserHistory from '@/browser-history.ts';
import Error from '@/pages/error/error.tsx';
import {getOffersErrorStatus, getIsOffersDataLoading, getOffers} from '@/store/offer-data';
import {getAuthorizationStatus} from '@/store/user';

function App() : JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const isOffersDataLoading = useAppSelector(getIsOffersDataLoading);
  const offers = useAppSelector(getOffers);
  const hasError = useAppSelector(getOffersErrorStatus);

  if (authorizationStatus === AuthorizationStatus.Unknown || isOffersDataLoading) {
    return(
      <Loading />
    );
  }

  if (hasError) {
    return (
      <Error />);
  }

  return (
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route
          index
          element={<Main offers={offers} />}
        />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute redirectTo={AppRoute.Login} condition={authorizationStatus === AuthorizationStatus.Auth}>
              <Favorites />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Offer}
          element={(
            <Offer
              authorizationStatus={authorizationStatus}
            />
          )}
        />
        <Route
          path={AppRoute.Login}
          element={(
            <PrivateRoute redirectTo={AppRoute.Root} condition={authorizationStatus === AuthorizationStatus.NoAuth}>
              <Login />
            </PrivateRoute>
          )}
        />
        <Route
          path='*'
          element={<NotFound />}
        />
      </Routes>
    </HistoryRouter>
  );
}

export default App;
