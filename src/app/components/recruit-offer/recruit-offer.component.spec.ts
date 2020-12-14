import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecruitOfferComponent } from './recruit-offer.component';

describe('RecruitOfferComponent', () => {
  let component: RecruitOfferComponent;
  let fixture: ComponentFixture<RecruitOfferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecruitOfferComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecruitOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
