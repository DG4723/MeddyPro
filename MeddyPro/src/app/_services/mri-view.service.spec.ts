import { TestBed } from '@angular/core/testing';

import { MriViewService } from './mri-view.service';

describe('MriViewService', () => {
  let service: MriViewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MriViewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
