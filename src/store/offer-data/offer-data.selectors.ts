import {State} from '../../types/state.ts';
import {NameSpace, RequestStatus} from '../../const.tsx';
import {TOffer} from '../../components/blocks/offer-card/types.ts';
import {Nullable} from "vitest";

export const getErrorStatus = (state: State): boolean => state[NameSpace.Data].status === RequestStatus.Failed;

export const getIsOffersDataLoading = (state: State): boolean => state[NameSpace.Data].status === RequestStatus.Loading;

export const getOffers = (state: State): TOffer[] => state[NameSpace.Data].offers;

export const getOffer = (state: State): Nullable<TOffer> => state[NameSpace.Data].offer;
