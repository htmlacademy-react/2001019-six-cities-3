import {AuthorizationStatus, NameSpace} from '../../const.tsx';
import {State} from '../../types/state.ts';

export const getIsAuth = (state: State) => state[NameSpace.User].authorizationStatus === AuthorizationStatus.Auth;
