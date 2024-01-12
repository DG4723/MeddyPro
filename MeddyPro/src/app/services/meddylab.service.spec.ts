import { TestBed } from '@angular/core/testing';

import { meddylabService } from './meddylab.service';

describe('MeddylabService', () => {
  let service: meddylabService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(meddylabService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
