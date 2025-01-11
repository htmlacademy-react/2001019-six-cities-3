import {NameSpace, SortValue, TCity} from '../../const.tsx';
import {State} from '../../types/state.ts';

export const getActiveCity = (state: State): TCity => state[NameSpace.App].city;
export const getActiveSorting = (state: State): SortValue => state[NameSpace.App].activeSorting;
export const getActiveOfferId = (state: State): string | null => state[NameSpace.App].activeOfferId;
