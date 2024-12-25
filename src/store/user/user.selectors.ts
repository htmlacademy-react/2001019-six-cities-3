import {AuthorizationStatus, NameSpace, RequestStatus} from '../../const.tsx';
import {State} from '../../types/state.ts';

export const getIsAuth = (state: State) => state[NameSpace.User].authorizationStatus === AuthorizationStatus.Auth;

export const getAuthorizationStatus = (state: State) => state[NameSpace.User].authorizationStatus;

export const getIsLoginLoading = (state: State): boolean => state[NameSpace.User].status === RequestStatus.Loading;

