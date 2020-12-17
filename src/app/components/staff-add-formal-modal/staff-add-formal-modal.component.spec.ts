import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffAddFormalModalComponent } from './staff-add-formal-modal.component';

describe('StaffAddFormalModalComponent', () => {
  let component: StaffAddFormalModalComponent;
  let fixture: ComponentFixture<StaffAddFormalModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaffAddFormalModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffAddFormalModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
