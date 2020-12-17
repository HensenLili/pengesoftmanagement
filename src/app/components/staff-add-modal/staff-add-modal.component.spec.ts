import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffAddModalComponent } from './staff-add-modal.component';

describe('StaffAddModalComponent', () => {
  let component: StaffAddModalComponent;
  let fixture: ComponentFixture<StaffAddModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaffAddModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffAddModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
