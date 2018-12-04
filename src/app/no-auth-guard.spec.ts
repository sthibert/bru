import { TestBed } from '@angular/core/testing';

import { NoAuthGuard } from './no-auth-guard';

describe('NoAuthGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NoAuthGuard = TestBed.get(NoAuthGuard);
    expect(service).toBeTruthy();
  });
});
