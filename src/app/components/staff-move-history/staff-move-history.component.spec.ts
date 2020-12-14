import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffMoveHistoryComponent } from './staff-move-history.component';

describe('StaffMoveHistoryComponent', () => {
  let component: StaffMoveHistoryComponent;
  let fixture: ComponentFixture<StaffMoveHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaffMoveHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffMoveHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
