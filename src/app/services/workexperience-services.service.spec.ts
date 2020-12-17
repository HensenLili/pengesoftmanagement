import { TestBed } from '@angular/core/testing';

import { WorkexperienceServicesService } from './workexperience-services.service';

describe('WorkexperienceServicesService', () => {
  let service: WorkexperienceServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorkexperienceServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
