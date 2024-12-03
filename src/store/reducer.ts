import {createReducer} from '@reduxjs/toolkit';
import {CITIES} from '../const.tsx';
import {changeCity, setActiveOffer} from './action.ts';
import {TCity, TOffer} from '../types.ts';
import {mockOffers} from '../mock/offers.ts';
import {TReview} from '../components/blocks/review-item/types.ts';
import {mockComments} from '../mock/comments.ts';

type TInitialState = {
    city: TCity;
    cities: TCity[];
    offers: TOffer[];
    reviews: TReview[];
    activeOffer: TOffer | null;
}

const initialState: TInitialState = {
  city: CITIES[0],
  cities: CITIES,
  offers: mockOffers,
  reviews: mockComments,
  activeOffer: null,
};
const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      const {city} = action.payload;
      state.city = city;
    });
  builder
    .addCase(setActiveOffer, (state, action) => {
      const {offer} = action.payload;
      state.activeOffer = offer;
    });
});

export { reducer };
