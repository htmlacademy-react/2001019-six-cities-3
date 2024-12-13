import {createAction} from '@reduxjs/toolkit';
import {TCity, AuthorizationStatus, AppRoute} from '../const.tsx';
import {TOffer} from '../components/blocks/offer-card/types.ts';

export const changeCity = createAction<{city: TCity}>('main/changeCity');

export const loadOffers = createAction<TOffer[]>('data/loadOffers');

export const setActiveOfferId = createAction<{offerId: string | null}>('main/setActiveOfferId');

export const setOffersDataLoadingStatus = createAction<boolean>('main/setOffersDataLoadingStatus');

export const setActiveSorting = createAction<{activeSorting: string}>('main/setActiveSorting');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export const redirectToRoute = createAction<AppRoute>('offer/redirectToRoute');
