import { Action, createReducer, on } from '@ngrx/store';
import { retrievedCars } from '../action/car.actions';


export const carFeatureKey = 'car';

export interface State {

}

export const initialState: State = {

};

export const reducer = createReducer(
  initialState,
  on(retrievedCars, (state, {carList}) => {
    return {...carList};
})
);

export function carReducer(state: any, actions: any) {
    return reducer(state, actions);
}