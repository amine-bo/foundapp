import { TestBed } from '@angular/core/testing';

import { CompleteSearchCityService } from './complete-search-city.service';

describe('CompleteSearchCityService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CompleteSearchCityService = TestBed.get(CompleteSearchCityService);
    expect(service).toBeTruthy();
  });
});
