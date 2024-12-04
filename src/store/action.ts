import {createAction} from '@reduxjs/toolkit';
import {TCity} from '../const.tsx';

export const changeCity = createAction<{city: TCity}>('main/changeCity');
export const setActiveOfferId = createAction<{offerId: string | null}>('main/setActiveOfferId');
