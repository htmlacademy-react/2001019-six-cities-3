import {AuthorizationStatus} from '../const.tsx';
import {createAction} from '@reduxjs/toolkit';

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');
