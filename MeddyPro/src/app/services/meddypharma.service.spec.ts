import { TestBed } from '@angular/core/testing';

import { MeddypharmaService } from './meddypharma.service';

describe('MeddypharmaService', () => {
  let service: MeddypharmaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MeddypharmaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
