import {createAsyncThunk} from '@reduxjs/toolkit';
import {TOffer} from '@/components/blocks/offer-card/types.ts';
import {APIRoute, AppRoute, AuthorizationStatus} from '@/const.tsx';
import {generatePath} from 'react-router-dom';
import {TReview} from '@/components/blocks/review-item/types.ts';
import {redirectToRoute, requireAuthorization} from '@/store/action.ts';
import {FavoriteData} from '@/types/favorite-data.ts';
import {ThunkOptions} from '@/types/thunk-options.ts';

export const fetchOffersAction = createAsyncThunk<TOffer[], undefined, ThunkOptions>(
  'data/fetchOffers',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<TOffer[]>(APIRoute.Offers);
    return data;
  },
);

export const fetchFavoritesAction = createAsyncThunk<TOffer[], undefined, ThunkOptions>(
  'data/fetchFavorites',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<TOffer[]>(APIRoute.Favorites);
    return data;
  },
);

export const fetchNearOfferAction = createAsyncThunk<TOffer[], {id: string}, ThunkOptions>(
  'data/fetchNearOffers',
  async ({id}, {extra: api}) => {
    const {data} = await api.get<TOffer[]>(generatePath(APIRoute.NearOffers, {id}), {});
    return data;
  },
);

export const fetchCommentsAction = createAsyncThunk<TReview[], {id: string}, ThunkOptions>(
  'data/fetchComments',
  async ({id}, {extra: api}) => {
    const {data} = await api.get<TReview[]>(generatePath(APIRoute.Comments, {id}), {});
    return data;
  },
);

export const fetchOfferAction = createAsyncThunk<TOffer, {id: string}, ThunkOptions>(
  'data/fetchOffer',
  async ({id}, {rejectWithValue, dispatch, extra: api}) => {
    try {
      const {data} = await api.get<TOffer>(generatePath(APIRoute.Offer, {id}), {});
      return data;
    } catch {
      dispatch(redirectToRoute(AppRoute.NotFoundScreen));
      return rejectWithValue(null);
    }
  },
);

export const addFavoriteAction = createAsyncThunk<TOffer, FavoriteData, ThunkOptions>(
  'data/favorite',
  async ({status, offerId}, {dispatch, extra: api}) => {
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
    const {data} = await api.post<TOffer>(generatePath(APIRoute.Favorite, {offerId: offerId,status: status.toString()}), {});
    dispatch(fetchFavoritesAction());
    return data;
  },
);
