import { TestBed } from '@angular/core/testing';

import { MeddydocService } from './meddydoc.service';

describe('MeddydocService', () => {
  let service: MeddydocService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MeddydocService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
