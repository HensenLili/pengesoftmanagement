import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecruitDemandComponent } from './recruit-demand.component';

describe('RecruitDemandComponent', () => {
  let component: RecruitDemandComponent;
  let fixture: ComponentFixture<RecruitDemandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecruitDemandComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecruitDemandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
