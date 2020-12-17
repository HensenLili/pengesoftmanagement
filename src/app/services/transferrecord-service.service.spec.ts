import { TestBed } from '@angular/core/testing';

import { TransferrecordServiceService } from './transferrecord-service.service';

describe('TransferrecordServiceService', () => {
  let service: TransferrecordServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransferrecordServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
