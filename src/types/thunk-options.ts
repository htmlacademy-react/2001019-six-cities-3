import {AppDispatch, State} from '@/types/state.ts';
import {AxiosInstance} from 'axios';

export type ThunkOptions = {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
