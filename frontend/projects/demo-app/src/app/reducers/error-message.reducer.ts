import { createReducer, on } from '@ngrx/store';

import { setErrorMessage, clearErrorMessage } from '../actions/error-message.actions';

export const initialState: Readonly<string> = '';

export const errorMessageReducer = createReducer(
  initialState,
  on(setErrorMessage, (_, { errorMessage }) => errorMessage),
  on(clearErrorMessage, () => ''),
);