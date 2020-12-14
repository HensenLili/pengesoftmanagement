import { TestBed } from '@angular/core/testing';

import { StaffServiceSvr } from './staffservice.service';

describe('StaffserviceService', () => {
  let service: StaffServiceSvr;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StaffServiceSvr);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
