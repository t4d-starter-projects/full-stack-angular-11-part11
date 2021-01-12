import { createAction, props } from '@ngrx/store';

export const setErrorMessage = createAction(
  '[App] Set Error Message',
  props<{ errorMessage: string }>(),
);

export const clearErrorMessage = createAction(
  '[App] Clear Error Message',
);