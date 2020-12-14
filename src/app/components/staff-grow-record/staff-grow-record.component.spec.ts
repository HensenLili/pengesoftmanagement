import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffGrowRecordComponent } from './staff-grow-record.component';

describe('StaffGrowRecordComponent', () => {
  let component: StaffGrowRecordComponent;
  let fixture: ComponentFixture<StaffGrowRecordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaffGrowRecordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffGrowRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
