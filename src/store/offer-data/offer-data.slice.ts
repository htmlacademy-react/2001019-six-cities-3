import {createSlice} from '@reduxjs/toolkit';
import {NameSpace, RequestStatus} from '../../const.tsx';
import {TOffer} from '@/components/blocks/offer-card/types.ts';
import {Nullable} from 'vitest';
import {TReview} from '@/components/blocks/review-item/types.ts';
import {
  addFavoriteAction,
  fetchCommentsAction,
  fetchFavoritesAction,
  fetchNearOfferAction,
  fetchOfferAction,
  fetchOffersAction
} from '@/store/offer-data/offer-data.api-actions.ts';
import {postReviewAction} from '@/store/user/user.api-actions.ts';

export type OfferDataSlice = {
  offer: Nullable<TOffer>;
  offers: TOffer[];
  favorites: TOffer[];
  addFavoriteStatus: RequestStatus;
  nearbyOffers: TOffer[];
  comments: TReview[];
  nearbyOffersStatus: RequestStatus;
  offersStatus: RequestStatus;
  offerStatus: RequestStatus;
  favoritesStatus: RequestStatus;
  commentsStatus: RequestStatus;
  reviewStatus: RequestStatus;
}

const initialState: OfferDataSlice = {
  offer: null,
  offers: [],
  favorites: [],
  addFavoriteStatus: RequestStatus.Idle,
  nearbyOffers: [],
  comments: [],
  nearbyOffersStatus: RequestStatus.Idle,
  offersStatus: RequestStatus.Idle,
  offerStatus: RequestStatus.Idle,
  commentsStatus: RequestStatus.Idle,
  reviewStatus: RequestStatus.Idle,
  favoritesStatus: RequestStatus.Idle,
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
      .addCase(fetchFavoritesAction.pending, (state) => {
        state.favoritesStatus = RequestStatus.Loading;
      })
      .addCase(fetchFavoritesAction.fulfilled, (state, action) => {
        state.favorites = action.payload;
        state.favoritesStatus = RequestStatus.Success;
      })
      .addCase(fetchFavoritesAction.rejected, (state) => {
        state.favoritesStatus = RequestStatus.Failed;
      })
      .addCase(addFavoriteAction.pending, (state) => {
        state.addFavoriteStatus = RequestStatus.Loading;
      })
      .addCase(addFavoriteAction.fulfilled, (state, action) => {
        const currentOffer = action.payload;

        if (currentOffer.isFavorite) {
          state.favorites.push();
        } else {
          state.favorites = state.favorites.filter((offer) => offer.id !== currentOffer.id);
        }

        state.addFavoriteStatus = RequestStatus.Success;
      })
      .addCase(addFavoriteAction.rejected, (state) => {
        state.addFavoriteStatus = RequestStatus.Failed;
      })
      .addCase(fetchNearOfferAction.pending, (state) => {
        state.nearbyOffersStatus = RequestStatus.Loading;
      })
      .addCase(fetchNearOfferAction.fulfilled, (state, action) => {
        state.nearbyOffers = action.payload;
        state.nearbyOffersStatus = RequestStatus.Success;
      })
      .addCase(fetchNearOfferAction.rejected, (state) => {
        state.nearbyOffersStatus = RequestStatus.Failed;
      })
      .addCase(fetchCommentsAction.pending, (state) => {
        state.commentsStatus = RequestStatus.Loading;
      })
      .addCase(fetchCommentsAction.fulfilled, (state, action) => {
        state.comments = action.payload;
        state.commentsStatus = RequestStatus.Success;
      })
      .addCase(fetchCommentsAction.rejected, (state) => {
        state.commentsStatus = RequestStatus.Failed;
      })
      .addCase(postReviewAction.pending, (state) => {
        state.reviewStatus = RequestStatus.Loading;
      })
      .addCase(postReviewAction.fulfilled, (state) => {
        state.reviewStatus = RequestStatus.Success;
      })
      .addCase(postReviewAction.rejected, (state) => {
        state.reviewStatus = RequestStatus.Failed;
      });
  }
});
