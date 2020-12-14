import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecruitNeedslistComponent } from './recruit-needslist.component';

describe('RecruitNeedslistComponent', () => {
  let component: RecruitNeedslistComponent;
  let fixture: ComponentFixture<RecruitNeedslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecruitNeedslistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecruitNeedslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
