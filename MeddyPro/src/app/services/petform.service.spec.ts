import { TestBed } from '@angular/core/testing';

import { PetformService } from './petform.service';

describe('PetformService', () => {
  let service: PetformService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PetformService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
