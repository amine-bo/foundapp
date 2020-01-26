import { TestBed } from '@angular/core/testing';

import { GlobalErrorHandler } from './globalerror.service';

describe('GlobalErrorHandler', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GlobalErrorHandler = TestBed.get(GlobalErrorHandler);
    expect(service).toBeTruthy();
  });
});
