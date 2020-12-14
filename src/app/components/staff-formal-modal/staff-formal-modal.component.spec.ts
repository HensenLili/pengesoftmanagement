import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffFormalModalComponent } from './staff-formal-modal.component';

describe('StaffFormalModalComponent', () => {
  let component: StaffFormalModalComponent;
  let fixture: ComponentFixture<StaffFormalModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaffFormalModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffFormalModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
