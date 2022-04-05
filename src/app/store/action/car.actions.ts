import { createAction, props } from '@ngrx/store';

export const retrievedCars = createAction(
  '[Car] Load Cars Success',
   props<{carList: any[]}>()
);

export const loadCars = createAction(
  '[Car] Load Cars'
);


