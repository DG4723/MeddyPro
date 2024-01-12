import { TestBed } from '@angular/core/testing';

import { DocregService } from './docreg.service';

describe('DocregService', () => {
  let service: DocregService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DocregService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
