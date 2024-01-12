import { TestBed } from '@angular/core/testing';

import { LabcartService } from './labcart.service';

describe('LabcartService', () => {
  let service: LabcartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LabcartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
