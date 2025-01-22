import {Route, Routes} from 'react-router-dom';
import {Suspense, lazy } from 'react';
import {AppRoute, AuthorizationStatus} from '../../const.tsx';
import PrivateRoute from '../private-route/private-route.tsx';
import {useAppSelector} from '@/hooks';
import Loading from '@/pages/loading/loading.tsx';
import HistoryRouter from '../history-route/history-route.tsx';
import browserHistory from '@/browser-history.ts';
import Error from '@/pages/error/error.tsx';
import {getOffersErrorStatus, getIsOffersDataLoading} from '@/store/offer-data';
import {getAuthorizationStatus} from '@/store/user';

const Main = lazy(() => import('@/pages/main/main.tsx'));
const Login = lazy(() => import('@/pages/login/login.tsx'));
const Offer = lazy(() => import('@/pages/offer/offer.tsx'));
const NotFound = lazy(() => import('@/pages/not-found/not-found.tsx'));
const Favorites = lazy(() => import('@/pages/favorites/favorites.tsx'));

function App() : JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const isOffersDataLoading = useAppSelector(getIsOffersDataLoading);
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
      <Suspense>
        <Routes>
          <Route
            index
            element={<Main />}
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
      </Suspense>
    </HistoryRouter>
  );
}

export default App;
