import { createSelector } from '@ngrx/store';

import { AppState } from '../models/AppState';

export const selectErrorMessage = createSelector(
  (state: AppState) => state.errorMessage,
  (errorMessage: string) => errorMessage,
);