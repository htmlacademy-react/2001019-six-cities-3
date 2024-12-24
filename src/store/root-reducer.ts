import {combineReducers} from '@reduxjs/toolkit';
import {NameSpace} from '../const';
import {appSlice} from './app/app.slice.ts';
import {userProcess} from './user/user.slice.ts';
import {offerData} from './offer-data/offer-data.slice.ts';
export const rootReducer = combineReducers({
  [NameSpace.App]: appSlice.reducer,
  [NameSpace.Data]: offerData.reducer,
  [NameSpace.User]: userProcess.reducer,
});
