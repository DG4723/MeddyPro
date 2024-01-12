import { TestBed } from '@angular/core/testing';

import { vetdocService } from './vetdoc.service';

describe('VetdocService', () => {
  let service: vetdocService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(vetdocService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
 