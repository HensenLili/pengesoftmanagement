import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffBasicInforComponent } from './staff-basic-infor.component';

describe('StaffBasicInforComponent', () => {
  let component: StaffBasicInforComponent;
  let fixture: ComponentFixture<StaffBasicInforComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaffBasicInforComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffBasicInforComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
