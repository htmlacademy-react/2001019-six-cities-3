import {Route, Routes} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const.tsx';
import Main from '../../pages/main/main.tsx';
import Login from '../../pages/login/login.tsx';
import Offer from '../../pages/offer/offer.tsx';
import NotFound from '../../pages/not-found/not-found.tsx';
import PrivateRoute from '../private-route/private-route.tsx';
import Favorites from '../../pages/favorites/favorites.tsx';
import {useAppSelector} from '../../hooks';
import LoadingScreen from '../../pages/loading/loading-screen.tsx';
import HistoryRouter from '../history-route/history-route.tsx';
import browserHistory from '../../browser-history.ts';
import ErrorScreen from '../../pages/error/error-screen.tsx';
import {getErrorStatus, getIsOffersDataLoading, getOffers} from '../../store/offer-data/selectors.ts';
import {mockComments} from '../../mock/comments.ts';
import {getCities} from '../../store/app/app.selectors.ts';

type TAppProps = {
  authorizationStatus: AuthorizationStatus;
}

function App({authorizationStatus}: TAppProps) : JSX.Element {
  const isOffersDataLoading = useAppSelector(getIsOffersDataLoading);
  const cities = useAppSelector(getCities);
  const offers = useAppSelector(getOffers);
  const reviews = mockComments;
  const hasError = useAppSelector(getErrorStatus);

  if (isOffersDataLoading) {

    return(
      <LoadingScreen />
    );
  }

  if (hasError) {
    return (
      <ErrorScreen />);
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
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.Auth}
            >
              <Favorites offers={offers} />
            </PrivateRoute>
          }
        />
        <Route
          path={`${AppRoute.Offer }`}
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
    </HistoryRouter>
  );
}

export default App;
