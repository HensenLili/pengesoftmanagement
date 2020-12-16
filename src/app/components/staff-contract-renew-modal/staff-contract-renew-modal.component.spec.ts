import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffContractRenewModalComponent } from './staff-contract-renew-modal.component';

describe('StaffContractRenewModalComponent', () => {
  let component: StaffContractRenewModalComponent;
  let fixture: ComponentFixture<StaffContractRenewModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaffContractRenewModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffContractRenewModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
