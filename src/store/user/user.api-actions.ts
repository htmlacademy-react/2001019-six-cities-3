import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from '@/types/state.ts';
import {AxiosInstance} from 'axios';
import {APIRoute, AppRoute, AuthorizationStatus} from '@/const.tsx';
import {redirectToRoute, requireAuthorization} from '@/store/action.ts';
import {AuthData} from '@/types/auth-data.ts';
import {UserData} from '@/types/user-data.ts';
import {dropToken, saveToken} from '@/services/token.ts';
import {ReviewData} from '@/types/review-data.ts';
import {generatePath} from 'react-router-dom';

type ThunkOptions = {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}

export const checkAuthAction = createAsyncThunk<void, undefined, ThunkOptions>(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    try {
      await api.get(APIRoute.Login);
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
    } catch {
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const loginAction = createAsyncThunk<void, AuthData, ThunkOptions>(
  'user/login',
  async ({login: email, password: password}, {dispatch, extra: api}) => {
    const {data: {token}} = await api.post<UserData>(APIRoute.Login, {email, password});
    saveToken(token);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
    dispatch(redirectToRoute(AppRoute.Root));
  },
);

export const logoutAction = createAsyncThunk<void, void, ThunkOptions>(
  'user/logout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
  },
);

export const postReviewAction = createAsyncThunk<void, ReviewData, ThunkOptions>(
  'data/review',
  async ({comment, rating, offerId, clearReviewForm}, {dispatch, extra: api}) => {
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
    await api.post(generatePath(APIRoute.Comments, {id: offerId}), {comment, rating});
    clearReviewForm();
  },
);
