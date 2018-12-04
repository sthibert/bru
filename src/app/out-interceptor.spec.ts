import { TestBed } from '@angular/core/testing';

import { OutInterceptor } from './out-interceptor';

describe('OutInterceptorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OutInterceptor = TestBed.get(OutInterceptor);
    expect(service).toBeTruthy();
  });
});
