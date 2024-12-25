import {createSlice} from '@reduxjs/toolkit';
import {NameSpace, RequestStatus} from '../../const.tsx';
import {fetchCommentsAction, fetchNearOfferAction, fetchOfferAction, fetchOffersAction} from '../api-actions.ts';
import {TNearbyOffers, TOffer} from '../../components/blocks/offer-card/types.ts';
import {Nullable} from "vitest";
import {TComments} from "../../components/blocks/review-item/types.ts";

export type OfferDataSlice = {
  offer: Nullable<TOffer>;
  offers: TOffer[];
  nearbyOffers: TNearbyOffers;
  comments: TComments;
  nearbyOffersStatus: RequestStatus;
  offersStatus: RequestStatus;
  offerStatus: RequestStatus;
  commentsStatus: RequestStatus;
}

const initialState: OfferDataSlice = {
  offer: null,
  offers: [],
  nearbyOffers: {
    offers: [],
    offerId: null,
  },
  comments: {
    reviews: [],
    offerId: null,
  },
  nearbyOffersStatus: RequestStatus.Idle,
  offersStatus: RequestStatus.Idle,
  offerStatus: RequestStatus.Idle,
  commentsStatus: RequestStatus.Idle,
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
      .addCase(fetchCommentsAction.pending, (state) => {
        state.commentsStatus = RequestStatus.Loading;
      })
      .addCase(fetchCommentsAction.fulfilled, (state, action) => {
        const {reviews, offerId} = action.payload;
        state.comments = {
          reviews: reviews.slice(0, 3),
          offerId: offerId
        };
        state.commentsStatus = RequestStatus.Success;
      })
      .addCase(fetchCommentsAction.rejected, (state) => {
        state.commentsStatus = RequestStatus.Failed;
      })
  }
});
