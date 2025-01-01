import {createAsyncThunk} from '@reduxjs/toolkit';
import {TOffer} from '@/components/blocks/offer-card/types.ts';
import {AppDispatch, State} from '@/types/state.ts';
import {AxiosInstance} from 'axios';
import {APIRoute, AppRoute} from '@/const.tsx';
import {generatePath} from 'react-router-dom';
import {TReview} from '@/components/blocks/review-item/types.ts';
import {redirectToRoute} from '@/store/action.ts';

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

export const fetchNearOfferAction = createAsyncThunk<TOffer[], {id: string}, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchNearOffers',
  async ({id}, {extra: api}) => {
    const {data} = await api.get<TOffer[]>(generatePath(APIRoute.NearOffers, {id}), {});
    return data;
  },
);

export const fetchCommentsAction = createAsyncThunk<TReview[], {id: string}, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchComments',
  async ({id}, {extra: api}) => {
    const {data} = await api.get<TReview[]>(generatePath(APIRoute.Comments, {id}), {});
    return data;
  },
);

export const fetchOfferAction = createAsyncThunk<TOffer, {id: string}, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
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
