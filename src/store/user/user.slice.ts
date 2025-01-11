import {createSlice} from '@reduxjs/toolkit';
import {AuthorizationStatus, NameSpace, RequestStatus} from '../../const';
import {requireAuthorization} from '../action.ts';
import {loginAction} from '@/store/user/user.api-actions.ts';

export type UserProcess = {
  authorizationStatus: AuthorizationStatus;
  status: RequestStatus;
}

const initialState: UserProcess = {
  authorizationStatus: AuthorizationStatus.Unknown,
  status: RequestStatus.Idle
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
      .addCase(loginAction.pending, (state) => {
        state.status = RequestStatus.Loading;
      })
      .addCase(loginAction.fulfilled, (state) => {
        state.status = RequestStatus.Success;
      })
      .addCase(loginAction.rejected, (state) => {
        state.status = RequestStatus.Failed;
      });
  }
});
