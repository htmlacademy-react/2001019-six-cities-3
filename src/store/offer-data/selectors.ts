import {State} from '../../types/state.ts';
import {NameSpace} from '../../const.tsx';
import {TOffer} from '../../components/blocks/offer-card/types.ts';

export const getErrorStatus = (state: State): boolean => state[NameSpace.Data].hasError;

export const getIsOffersDataLoading = (state: State): boolean => state[NameSpace.Data].isOffersDataLoading;

export const getOffers = (state: State): TOffer[] => state[NameSpace.Data].offers;
