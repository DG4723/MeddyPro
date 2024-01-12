import { TestBed } from '@angular/core/testing';

import { vetmedService } from './vetmed.service';

describe('vetmedService', () => {
  let service: vetmedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(vetmedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
 