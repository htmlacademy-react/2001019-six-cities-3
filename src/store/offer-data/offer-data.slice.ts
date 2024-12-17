import {createSlice} from '@reduxjs/toolkit';
import {NameSpace, RequestStatus} from '../../const.tsx';
import {fetchOffersAction} from '../api-actions.ts';
import {TOffer} from '../../components/blocks/offer-card/types.ts';

export type OfferDataSlice = {
  offers: TOffer[];
  status: RequestStatus;
}

const initialState: OfferDataSlice = {
  offers: [],
  status: RequestStatus.Idle
};

export const offerData = createSlice({
  name: NameSpace.Data,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchOffersAction.pending, (state) => {
        state.status = RequestStatus.Loading;
      })
      .addCase(fetchOffersAction.fulfilled, (state, action) => {
        state.offers = action.payload;
        state.status = RequestStatus.Success;
      })
      .addCase(fetchOffersAction.rejected, (state) => {
        state.status = RequestStatus.Failed;
      });
  }
});
