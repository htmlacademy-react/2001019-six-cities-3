import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {CITIES, NameSpace, TCity} from '../../const';
import {CityProcess} from '../../types/state.ts';

const initialState: CityProcess = {
  city: CITIES[0],
  cities: CITIES,
};

export const cityProcess = createSlice({
  name: NameSpace.City,
  initialState,
  reducers: {
    changeCity: (state, action: PayloadAction<{city: TCity}>) => {
      const {city} = action.payload;
      state.city = city;
    }
  },
});

export const {changeCity} = cityProcess.actions;
