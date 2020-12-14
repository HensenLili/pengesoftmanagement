import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffBasicChangeComponent } from './staff-basic-change.component';

describe('StaffBasicChangeComponent', () => {
  let component: StaffBasicChangeComponent;
  let fixture: ComponentFixture<StaffBasicChangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaffBasicChangeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffBasicChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
