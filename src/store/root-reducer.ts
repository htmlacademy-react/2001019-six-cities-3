import {combineReducers} from '@reduxjs/toolkit';
import {NameSpace} from '../const';
import {offerProcess} from './offer-process/offer-process.ts';
import {cityProcess} from './city-process/city-process.ts';
import {userProcess} from './user-process/user-process.ts';
import {offerData} from './offer-data/offer-data.ts';
export const rootReducer = combineReducers({
  [NameSpace.Offer]: offerProcess.reducer,
  [NameSpace.Data]: offerData.reducer,
  [NameSpace.City]: cityProcess.reducer,
  [NameSpace.User]: userProcess.reducer,
});
