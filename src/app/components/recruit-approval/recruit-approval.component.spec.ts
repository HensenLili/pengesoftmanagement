import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecruitApprovalComponent } from './recruit-approval.component';

describe('RecruitApprovalComponent', () => {
  let component: RecruitApprovalComponent;
  let fixture: ComponentFixture<RecruitApprovalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecruitApprovalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecruitApprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
