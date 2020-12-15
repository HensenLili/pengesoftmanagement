import { TestBed } from '@angular/core/testing';

import { RecruitresumeService } from './recruitresume.service';

describe('RecruitresumeService', () => {
  let service: RecruitresumeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecruitresumeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
