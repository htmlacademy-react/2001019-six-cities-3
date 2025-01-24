import {createSlice} from '@reduxjs/toolkit';
import {AuthorizationStatus, NameSpace, RequestStatus} from '../../const';
import {requireAuthorization} from '../action.ts';
import {checkAuthAction, loginAction, logoutAction} from '@/store/user/user.api-actions.ts';
import {Nullable} from 'vitest';

export type UserProcess = {
  authorizationStatus: AuthorizationStatus;
  status: RequestStatus;
  email: Nullable<string>;
}

const initialState: UserProcess = {
  authorizationStatus: AuthorizationStatus.Unknown,
  status: RequestStatus.Idle,
  email: null,
};

export const userProcess = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(requireAuthorization, (state, action) => {
        state.authorizationStatus = action.payload;
      })
      .addCase(checkAuthAction.fulfilled, (state, action) => {
        state.email = action.payload;
      })
      .addCase(loginAction.pending, (state) => {
        state.status = RequestStatus.Loading;
      })
      .addCase(loginAction.fulfilled, (state, action) => {
        state.status = RequestStatus.Success;
        state.email = action.payload;
      })
      .addCase(loginAction.rejected, (state) => {
        state.status = RequestStatus.Failed;
      })
      .addCase(logoutAction.fulfilled, (state) => {
        state.status = RequestStatus.Success;
      });
  }
});
