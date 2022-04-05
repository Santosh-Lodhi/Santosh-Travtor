import * as fromCar from './car.actions';

describe('loadCars', () => {
  it('should return an action', () => {
    expect(fromCar.loadCars().type).toBe('[Car] Load Cars');
  });
});
