import {OfferData} from '../../types/state.ts';
import {createSlice} from '@reduxjs/toolkit';
import {NameSpace} from '../../const.tsx';
import {fetchOffersAction} from '../api-actions.ts';

const initialState: OfferData = {
  offers: [],
  isOffersDataLoading: false,
  hasError: false,
};

export const offerData = createSlice({
  name: NameSpace.Data,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchOffersAction.pending, (state) => {
        state.isOffersDataLoading = true;
        state.hasError = false;
      })
      .addCase(fetchOffersAction.fulfilled, (state, action) => {
        state.offers = action.payload;
        state.isOffersDataLoading = false;
      })
      .addCase(fetchOffersAction.rejected, (state) => {
        state.isOffersDataLoading = false;
        state.hasError = true;
      });
  }
});
