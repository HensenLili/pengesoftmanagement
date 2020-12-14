import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecruitNeedsTableComponent } from './recruit-needs-table.component';

describe('RecruitNeedsTableComponent', () => {
  let component: RecruitNeedsTableComponent;
  let fixture: ComponentFixture<RecruitNeedsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecruitNeedsTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecruitNeedsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
