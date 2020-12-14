import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecruitInterviewComponent } from './recruit-interview.component';

describe('RecruitInterviewComponent', () => {
  let component: RecruitInterviewComponent;
  let fixture: ComponentFixture<RecruitInterviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecruitInterviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecruitInterviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
