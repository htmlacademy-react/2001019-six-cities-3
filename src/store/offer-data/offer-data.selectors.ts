import {State} from '../../types/state.ts';
import {NameSpace, RequestStatus} from '../../const.tsx';
import {TNearbyOffers, TOffer} from '../../components/blocks/offer-card/types.ts';
import {Nullable} from 'vitest';
import {TComments} from '../../components/blocks/review-item/types.ts';

export const getOffersErrorStatus = (state: State): boolean => state[NameSpace.Data].offersStatus === RequestStatus.Failed;
export const getOfferErrorStatus = (state: State): boolean => state[NameSpace.Data].offerStatus === RequestStatus.Failed;
export const getNearbyOffersErrorStatus = (state: State): boolean => state[NameSpace.Data].nearbyOffersStatus === RequestStatus.Failed;
export const getCommentsErrorStatus = (state: State): boolean => state[NameSpace.Data].commentsStatus === RequestStatus.Failed;

export const getIsOffersDataLoading = (state: State): boolean => state[NameSpace.Data].offersStatus === RequestStatus.Loading;
export const getIsOfferDataLoading = (state: State): boolean => state[NameSpace.Data].offerStatus === RequestStatus.Loading;
export const getIsNearbyOffersDataLoading = (state: State): boolean => state[NameSpace.Data].nearbyOffersStatus === RequestStatus.Loading;

export const getIsCommentsDataLoading = (state: State): boolean => state[NameSpace.Data].commentsStatus === RequestStatus.Loading;

export const getOffers = (state: State): TOffer[] => state[NameSpace.Data].offers;

export const getOffer = (state: State): Nullable<TOffer> => state[NameSpace.Data].offer;

export const getNearbyOffers = (state: State): TNearbyOffers => state[NameSpace.Data].nearbyOffers;

export const getComments = (state: State): TComments => state[NameSpace.Data].comments;

export const getIsReviewLoading = (state: State): boolean => state[NameSpace.Data].reviewStatus === RequestStatus.Loading;
