import { TestBed } from '@angular/core/testing';

import { MeddypatientService } from './meddypatient.service';

describe('MeddypatientService', () => {
  let service: MeddypatientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MeddypatientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
