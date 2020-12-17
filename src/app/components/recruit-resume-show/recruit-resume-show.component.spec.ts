import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecruitResumeShowComponent } from './recruit-resume-show.component';

describe('RecruitResumeShowComponent', () => {
  let component: RecruitResumeShowComponent;
  let fixture: ComponentFixture<RecruitResumeShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecruitResumeShowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecruitResumeShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
