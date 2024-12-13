import {CityProcess} from '../../types/state.ts';
import {TCity} from '../../const.tsx';

export const getCurrentCity = (state: CityProcess): TCity => state.city;
