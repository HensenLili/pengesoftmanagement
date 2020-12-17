import { TestBed } from '@angular/core/testing';

import { SendOfferService } from './send-offer.service';

describe('SendOfferService', () => {
  let service: SendOfferService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SendOfferService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
