import { TestBed } from '@angular/core/testing';

import { RegularRecordService } from './regular-record.service';

describe('RegularRecordService', () => {
  let service: RegularRecordService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegularRecordService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
