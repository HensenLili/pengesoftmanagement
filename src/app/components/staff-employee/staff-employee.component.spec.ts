import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffEmployeeComponent } from './staff-employee.component';

describe('StaffEmployeeComponent', () => {
  let component: StaffEmployeeComponent;
  let fixture: ComponentFixture<StaffEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaffEmployeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
