import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffContractChangeModalComponent } from './staff-contract-change-modal.component';

describe('StaffContractChangeModalComponent', () => {
  let component: StaffContractChangeModalComponent;
  let fixture: ComponentFixture<StaffContractChangeModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaffContractChangeModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffContractChangeModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
