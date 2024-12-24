import {createSlice} from '@reduxjs/toolkit';
import {NameSpace, RequestStatus} from '../../const.tsx';
import {fetchNearOfferAction, fetchOfferAction, fetchOffersAction} from '../api-actions.ts';
import {TNearbyOffers, TOffer} from '../../components/blocks/offer-card/types.ts';
import {Nullable} from "vitest";

export type OfferDataSlice = {
  offer: Nullable<TOffer>;
  offers: TOffer[];
  nearbyOffers: TNearbyOffers;
  nearbyOffersStatus: RequestStatus;
  offersStatus: RequestStatus;
  offerStatus: RequestStatus;
}

const initialState: OfferDataSlice = {
  offer: null,
  offers: [],
  nearbyOffers: {
    offers: [],
    offerId: null,
  },
  nearbyOffersStatus: RequestStatus.Idle,
  offersStatus: RequestStatus.Idle,
  offerStatus: RequestStatus.Idle,
};

export const offerData = createSlice({
  name: NameSpace.Data,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchOffersAction.pending, (state) => {
        state.offersStatus = RequestStatus.Loading;
      })
      .addCase(fetchOffersAction.fulfilled, (state, action) => {
        state.offers = action.payload;
        state.offersStatus = RequestStatus.Success;
      })
      .addCase(fetchOffersAction.rejected, (state) => {
        state.offersStatus = RequestStatus.Failed;
      })
      .addCase(fetchOfferAction.pending, (state) => {
        state.offerStatus = RequestStatus.Loading;
      })
      .addCase(fetchOfferAction.fulfilled, (state, action) => {
        state.offer = action.payload;
        state.offerStatus = RequestStatus.Success;
      })
      .addCase(fetchOfferAction.rejected, (state) => {
        state.offerStatus = RequestStatus.Failed;
      })
      .addCase(fetchNearOfferAction.pending, (state) => {
        state.nearbyOffersStatus = RequestStatus.Loading;
      })
      .addCase(fetchNearOfferAction.fulfilled, (state, action) => {
        const {offers, offerId} = action.payload;
        state.nearbyOffers = {
          offers: offers.slice(0, 3),
          offerId: offerId
        };
        state.nearbyOffersStatus = RequestStatus.Success;
      })
      .addCase(fetchNearOfferAction.rejected, (state) => {
        state.nearbyOffersStatus = RequestStatus.Failed;
      })
  }
});
