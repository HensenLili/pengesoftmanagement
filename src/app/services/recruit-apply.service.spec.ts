import { TestBed } from '@angular/core/testing';

import { RecruitApplyService } from './recruit-apply.service';

describe('RecruitApplyService', () => {
  let service: RecruitApplyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecruitApplyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
