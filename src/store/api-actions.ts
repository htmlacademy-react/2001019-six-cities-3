import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from '../types/state.ts';
import {AxiosInstance} from 'axios';
import {TNearbyOffers, TOffer} from '../components/blocks/offer-card/types.ts';
import {APIRoute, AppRoute, AuthorizationStatus} from '../const.tsx';
import {redirectToRoute, requireAuthorization} from './action.ts';
import {UserData} from '../types/user-data.ts';
import {AuthData} from '../types/auth-data.ts';
import {dropToken, saveToken} from '../services/token.ts';
import {generatePath} from "react-router-dom";
import {TComments, TReview} from "../components/blocks/review-item/types.ts";

export const fetchOffersAction = createAsyncThunk<TOffer[], undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffers',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<TOffer[]>(APIRoute.Offers);
    return data;
  },
);

export const fetchNearOfferAction = createAsyncThunk<TNearbyOffers, {id: string}, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
}>(
    'data/fetchNearOffers',
    async ({id}, {extra: api}) => {
        const {data} = await api.get<TOffer[]>(generatePath(APIRoute.NearOffers, {id}), {});
        return {
            offers: data,
            offerId: id,
        };
    },
);

export const fetchCommentsAction = createAsyncThunk<TComments, {id: string}, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
}>(
    'data/fetchComments',
    async ({id}, {extra: api}) => {
        const {data} = await api.get<TReview[]>(generatePath(APIRoute.Comments, {id}), {});
        return {
            reviews: data,
            offerId: id,
        };
    },
);

export const fetchOfferAction = createAsyncThunk<TOffer, {id: string}, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
}>(
    'data/fetchOffer',
    async ({id}, {extra: api}) => {
        const {data} = await api.get<TOffer>(generatePath(APIRoute.Offer, {id}), {}); //здесь находятся данные по офферу
        return data;
    },
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    try {
      await api.get(APIRoute.Login);
      dispatch(requireAuthorization(AuthorizationStatus.Auth)); //диспатч отправляет действие в редюсер, а редюсер меняет стор
    } catch {
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({login: email, password}, {dispatch, extra: api}) => {
    const {data: {token}} = await api.post<UserData>(APIRoute.Login, {email, password});
    saveToken(token);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
    dispatch(redirectToRoute(AppRoute.Root));
  },
);

export const logoutAction = createAsyncThunk<void, void, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
  },
);
