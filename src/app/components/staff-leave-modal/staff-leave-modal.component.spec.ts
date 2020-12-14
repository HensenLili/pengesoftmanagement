import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffLeaveModalComponent } from './staff-leave-modal.component';

describe('StaffLeaveModalComponent', () => {
  let component: StaffLeaveModalComponent;
  let fixture: ComponentFixture<StaffLeaveModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaffLeaveModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffLeaveModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
