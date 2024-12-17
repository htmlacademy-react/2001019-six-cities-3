import {AppRoute, AuthorizationStatus} from '../const.tsx';
import {createAction} from '@reduxjs/toolkit';

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export const redirectToRoute = createAction<AppRoute>('/redirectToRoute');
