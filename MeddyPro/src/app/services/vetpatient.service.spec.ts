import { TestBed } from '@angular/core/testing';

import { VetpatientService } from './vetpatient.service';

describe('vetpatientService', () => {
  let service: VetpatientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VetpatientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
