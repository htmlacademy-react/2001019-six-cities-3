import {createReducer} from '@reduxjs/toolkit';
import {CITIES, SortType, TCity, AuthorizationStatus} from '../const.tsx';
import {changeCity, setActiveOfferId, setActiveSorting, loadOffers, setOffersDataLoadingStatus, requireAuthorization, setError} from './action.ts';
import {TOffer} from '../components/blocks/offer-card/types.ts';
//import {mockOffers} from '../mock/offers.ts';
import {TReview} from '../components/blocks/review-item/types.ts';
import {mockComments} from '../mock/comments.ts';

type TInitialState = {
    city: TCity;
    cities: TCity[];
    activeSorting: string;
    offers: TOffer[];
    reviews: TReview[];
    activeOfferId: string | null;
    authorizationStatus: string;
    isOffersDataLoading: boolean;
    error: string | null;
}

const initialState: TInitialState = {
  city: CITIES[0],
  cities: CITIES,
  activeSorting: SortType.Popular,
  //offers: mockOffers,
  offers: [],
  reviews: mockComments,
  activeOfferId: null,
  authorizationStatus: AuthorizationStatus.Unknown,
  isOffersDataLoading: false,
  error: null,
};
const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      const {city} = action.payload;
      state.city = city;
    });
  builder
    .addCase(setActiveOfferId, (state, action) => {
      const {offerId} = action.payload;
      state.activeOfferId = offerId;
    });
  builder
    .addCase(setActiveSorting, (state, action) => {
      const {activeSorting} = action.payload;
      state.activeSorting = activeSorting;
    });
  builder
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
    });
  builder
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    });
  builder
    .addCase(setOffersDataLoadingStatus, (state, action) => {
      state.isOffersDataLoading = action.payload;
    });
  builder
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    });
});

export { reducer };
