import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffMoveModalComponent } from './staff-move-modal.component';

describe('StaffMoveModalComponent', () => {
  let component: StaffMoveModalComponent;
  let fixture: ComponentFixture<StaffMoveModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaffMoveModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffMoveModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
