import { TestBed } from '@angular/core/testing';

import { ShopingCar } from './shoping-car';

describe('ShopingCar', () => {
  let service: ShopingCar;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShopingCar);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
