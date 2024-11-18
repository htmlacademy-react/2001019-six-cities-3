import {createReducer} from '@reduxjs/toolkit';
import {CITIES} from '../const.tsx';
import {changeCity, storeOffers} from './action.ts';
import {TCity, TOffer} from '../components/blocks/offer-card/types.ts';

type TInitialState = {
    city: TCity;
    offers: TOffer[];
}

const initialState: TInitialState = {
  city: CITIES[0],
  offers: [],
};
const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      const {city} = action.payload;
      state.city = city;
    });
  builder
    .addCase(storeOffers, (state, action) => {
      const {offers} = action.payload;
      state.offers = offers;
    });
});

export { reducer };
