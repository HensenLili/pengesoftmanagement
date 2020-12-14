import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffMoveComponent } from './staff-move.component';

describe('StaffMoveComponent', () => {
  let component: StaffMoveComponent;
  let fixture: ComponentFixture<StaffMoveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaffMoveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffMoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
