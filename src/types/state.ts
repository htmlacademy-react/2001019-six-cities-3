import {store} from '../store/index.ts';
import {TOffer} from '../components/blocks/offer-card/types.ts';
import {TCity} from '../const.tsx';

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type OfferProcess = {
  activeSorting: string;
  activeOfferId: string | null;
}

export type OfferData = {
  offers: TOffer[];
  isOffersDataLoading: boolean;
  hasError: boolean;
}

export type CityProcess = {
  city: TCity;
  cities: TCity[];
}

export type UserProcess = {
  authorizationStatus: string;
}
