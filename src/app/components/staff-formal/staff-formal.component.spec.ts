import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffFormalComponent } from './staff-formal.component';

describe('StaffFormalComponent', () => {
  let component: StaffFormalComponent;
  let fixture: ComponentFixture<StaffFormalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaffFormalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffFormalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
