import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from '../app.state';

export const carRootSelector = (state: AppState) => state.car;

export const uniqueCarName = createSelector(
    carRootSelector,
    (car: any[]) => {
        return [... new Set(car.map(_ => _.name))];
    }
);

export const getCarListByName = (searchString: string) => 
createSelector(carRootSelector, (car: any[]) => {
    if(searchString.length){
        return car.filter((_) => _.name.includes(searchString));
    } else {
        return car;
    }
});