import { TestBed } from '@angular/core/testing';

import { BodycheckService } from './bodycheck.service';

describe('BodyService', () => {
  let service: BodycheckService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BodycheckService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
