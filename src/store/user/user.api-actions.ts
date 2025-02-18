import {createAsyncThunk} from '@reduxjs/toolkit';
import {APIRoute, AppRoute, AuthorizationStatus} from '@/const.tsx';
import {redirectToRoute, requireAuthorization} from '@/store/action.ts';
import {AuthData} from '@/types/auth-data.ts';
import {UserData} from '@/types/user-data.ts';
import {dropToken, saveToken} from '@/services/token.ts';
import {ReviewData} from '@/types/review-data.ts';
import {generatePath} from 'react-router-dom';
import {ThunkOptions} from '@/types/thunk-options.ts';
import {CheckAuthData} from '@/types/check-auth-data.ts';
import {Nullable} from 'vitest';
import {
  clearFavorites,
  fetchFavoritesAction,
} from '@/store/offer-data';
import {TReview} from '@/components/blocks/review-item/types.ts';

export const checkAuthAction = createAsyncThunk<Nullable<string>, undefined, ThunkOptions>(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get<CheckAuthData>(APIRoute.Login);
      dispatch(requireAuthorization(AuthorizationStatus.Auth));

      return data.email;
    } catch {
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));

      return null;
    }
  },
);

export const loginAction = createAsyncThunk<Nullable<string>, AuthData, ThunkOptions>(
  'user/login',
  async ({login: email, password: password}, {dispatch, extra: api}) => {
    const {data} = await api.post<UserData>(APIRoute.Login, {email, password});
    saveToken(data.token);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
    dispatch(redirectToRoute(AppRoute.Root));
    dispatch(fetchFavoritesAction);

    return data.email;
  },
);

export const logoutAction = createAsyncThunk<void, void, ThunkOptions>(
  'user/logout',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    dispatch(clearFavorites());
  },
);

export const postReviewAction = createAsyncThunk<TReview, ReviewData, ThunkOptions>(
  'data/review',
  async ({comment, rating, offerId, clearReviewForm}, {dispatch, extra: api}) => {
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
    const {data} = await api.post<TReview>(generatePath(APIRoute.Comments, {id: offerId}), {comment, rating});
    clearReviewForm();

    return data;
  },
);
