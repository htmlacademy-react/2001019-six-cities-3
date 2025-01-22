import {State} from '@/types/state.ts';
import {NameSpace, RequestStatus} from '../../const.tsx';
import {TOffer} from '@/components/blocks/offer-card/types.ts';
import {Nullable} from 'vitest';
import {TReview} from '@/components/blocks/review-item/types.ts';
import {createSelector} from '@reduxjs/toolkit';
import dayjs from 'dayjs';

export const getOffersErrorStatus = (state: State): boolean => state[NameSpace.Data].offersStatus === RequestStatus.Failed;
export const getOfferErrorStatus = (state: State): boolean => state[NameSpace.Data].offerStatus === RequestStatus.Failed;
export const getIsOffersDataLoading = (state: State): boolean => state[NameSpace.Data].offersStatus === RequestStatus.Loading;
export const getIsOfferDataLoading = (state: State): boolean => state[NameSpace.Data].offerStatus === RequestStatus.Loading;
export const getIsNearbyOffersDataLoading = (state: State): boolean => state[NameSpace.Data].nearbyOffersStatus === RequestStatus.Loading;
export const getIsCommentsDataLoading = (state: State): boolean => state[NameSpace.Data].commentsStatus === RequestStatus.Loading;

export const getOffers = (state: State): TOffer[] => state[NameSpace.Data].offers;
export const getFavorites = (state: State): TOffer[] => state[NameSpace.Data].favorites;
export const getFavoritesCount = (state: State): number => state[NameSpace.Data].favorites.length;

export const getIsFavoriteAdding = (state: State): boolean => state[NameSpace.Data].addFavoriteStatus === RequestStatus.Loading;
export const getOffer = (state: State): Nullable<TOffer> => state[NameSpace.Data].offer;

export const getNearbyOffers = (state: State): TOffer[] => state[NameSpace.Data].nearbyOffers;
export const getCutNearbyOffers = (state: State): TOffer[] => state[NameSpace.Data].nearbyOffers.slice(0,3);
export const getCutComments = (state: State): TReview[] => state[NameSpace.Data].comments;
// export const getCutComments = (state: State): TReview[] => state[NameSpace.Data].comments.slice(0, 10);

export const selectSortedComments = createSelector(
  [getCutComments],
  (comments) => comments.toSorted((a : TReview, b : TReview) => dayjs(b.date).diff(dayjs(a.date)))
);

export const getIsReviewLoading = (state: State): boolean => state[NameSpace.Data].reviewStatus === RequestStatus.Loading;
