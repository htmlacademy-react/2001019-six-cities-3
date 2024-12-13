import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {NameSpace, SortType} from '../../const';
import {OfferProcess} from '../../types/state.ts';

const initialState: OfferProcess = {
  activeSorting: SortType.Popular,
  activeOfferId: null,
};

export const offerProcess = createSlice({
  name: NameSpace.Offer,
  initialState,
  reducers: {
    setActiveOfferId: (state, action: PayloadAction<{offerId: string | null}>) => {
      const {offerId} = action.payload;
      state.activeOfferId = offerId;
    },
    setActiveSorting: (state, action: PayloadAction<{activeSorting: string}>) => {
      const {activeSorting} = action.payload;
      state.activeSorting = activeSorting;
    },
  },
});

export const {setActiveOfferId, setActiveSorting} = offerProcess.actions;
