import {createReducer} from '@reduxjs/toolkit';
import {CITIES, SortType, TCity} from '../const.tsx';
import {changeCity, setActiveOfferId, setActiveSorting} from './action.ts';
import {TOffer} from '../components/blocks/offer-card/types.ts';
import {mockOffers} from '../mock/offers.ts';
import {TReview} from '../components/blocks/review-item/types.ts';
import {mockComments} from '../mock/comments.ts';

type TInitialState = {
    city: TCity;
    cities: TCity[];
    activeSorting: string;
    offers: TOffer[];
    reviews: TReview[];
    activeOfferId: string | null;
}

const initialState: TInitialState = {
  city: CITIES[0],
  cities: CITIES,
  activeSorting: SortType.Popular,
  offers: mockOffers,
  reviews: mockComments,
  activeOfferId: null,
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
});

export { reducer };
