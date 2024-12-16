// import {OfferProcess} from "../../types/state.ts";
// import {NameSpace} from "../../const.tsx";
// export const getActiveOfferId = (state: OfferProcess): string|null => state.activeOfferId;
//
// //export const getActiveSorting = (state: OfferProcess): string => state[NameSpace.Offer].activeSorting);

import {NameSpace, SortValue, TCity} from '../../const.tsx';
import {State} from '../../types/state.ts';

export const getActiveCity = (state: State): TCity => state[NameSpace.App].city;
export const getActiveSorting = (state: State): SortValue => state[NameSpace.App].activeSorting;

export const getCities = (state: State): TCity[] => state[NameSpace.App].cities;

export const getActiveOfferId = (state: State): string | null => state[NameSpace.App].activeOfferId;
