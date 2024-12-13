import {State} from '../../types/state.ts';
import {NameSpace} from '../../const.tsx';

export const getErrorStatus = (state: State): boolean => state[NameSpace.Data].hasError;
