import { TestBed } from '@angular/core/testing';

import { MriService } from './mri.service';

describe('MriService', () => {
  let service: MriService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MriService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
