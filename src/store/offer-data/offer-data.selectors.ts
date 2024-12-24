import {State} from '../../types/state.ts';
import {NameSpace, RequestStatus} from '../../const.tsx';
import {TNearbyOffers, TOffer} from '../../components/blocks/offer-card/types.ts';
import {Nullable} from "vitest";

export const getOffersErrorStatus = (state: State): boolean => state[NameSpace.Data].offersStatus === RequestStatus.Failed;

export const getIsOffersDataLoading = (state: State): boolean => state[NameSpace.Data].offersStatus === RequestStatus.Loading;
export const getIsOfferDataLoading = (state: State): boolean => state[NameSpace.Data].offerStatus === RequestStatus.Loading;
export const getIsNearbyOffersDataLoading = (state: State): boolean => state[NameSpace.Data].nearbyOffersStatus === RequestStatus.Loading;

export const getOffers = (state: State): TOffer[] => state[NameSpace.Data].offers;

export const getOffer = (state: State): Nullable<TOffer> => state[NameSpace.Data].offer;

export const getNearbyOffers = (state: State): TNearbyOffers => state[NameSpace.Data].nearbyOffers;
