import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecruitTalentPoolComponent } from './recruit-talent-pool.component';

describe('RecruitTalentPoolComponent', () => {
  let component: RecruitTalentPoolComponent;
  let fixture: ComponentFixture<RecruitTalentPoolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecruitTalentPoolComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecruitTalentPoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
