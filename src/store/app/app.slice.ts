import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {CITIES, NameSpace, SortValue, TCity} from '../../const';

export type appSlice = {
  activeSorting: SortValue;
  activeOfferId: string | null;
  city: TCity;
  cities: TCity[];
}

const initialState: appSlice = {
  activeSorting: 'Popular',
  activeOfferId: null,
  city: CITIES[0],
  cities: CITIES,
};

export const appSlice = createSlice({
  name: NameSpace.App,
  initialState,
  reducers: {
    setActiveOfferId: (state, action: PayloadAction<{offerId: string | null}>) => {
      const {offerId} = action.payload;
      state.activeOfferId = offerId;
    },
    setActiveSorting: (state, action: PayloadAction<{activeSorting: SortValue}>) => {
      const {activeSorting} = action.payload;
      state.activeSorting = activeSorting;
    },
    changeCity: (state, action: PayloadAction<{city: TCity}>) => {
      const {city} = action.payload;
      state.city = city;
    }
  },
});

export const {setActiveOfferId, setActiveSorting, changeCity} = appSlice.actions;
