//чтобы передать данные от меньшего компонента большему: в большем команенте объявляем функцию onAnswer
//ее передаем пропсом в меньший компонент , вызываем ее обработчике события и при вызове передаем в нее state
//и тогда этот state будет доступен большему компоненту!!!
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const.tsx';
import Main from '../../pages/main/main.tsx';
import Login from '../../pages/login/login.tsx';
import Offer from '../../pages/offer/offer.tsx';
import NotFound from '../../pages/not-found/not-found.tsx';
import PrivateRoute from '../private-route/private-route.tsx';
import Favorites from '../../pages/favorites/favorites.tsx';
import Layout from '../layout/layout.tsx';
import {TCity, TOffer} from '../blocks/offer-card/types.ts';
import {TReview} from '../blocks/review-item/types.ts';
import {storeOffers} from '../../store/action.ts';
import {useAppDispatch} from '../../hooks';
import {mockOffers} from '../../mock/offers.ts';

type TAppProps = {
  offers: TOffer[];
  reviews: TReview[];
  cities: TCity[];
  authorizationStatus: AuthorizationStatus;
}

function App({cities, offers, reviews, authorizationStatus}: TAppProps) : JSX.Element {
  const dispatch = useAppDispatch();
  dispatch(storeOffers({offers: mockOffers}));

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Root}
          element={<Layout />}
        >
          <Route
            index
            element={<Main cities={cities} />}
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
