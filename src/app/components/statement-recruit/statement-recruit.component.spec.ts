import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatementRecruitComponent } from './statement-recruit.component';

describe('StatementRecruitComponent', () => {
  let component: StatementRecruitComponent;
  let fixture: ComponentFixture<StatementRecruitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatementRecruitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatementRecruitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
