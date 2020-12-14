import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffContractRenewComponent } from './staff-contract-renew.component';

describe('StaffContractRenewComponent', () => {
  let component: StaffContractRenewComponent;
  let fixture: ComponentFixture<StaffContractRenewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaffContractRenewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffContractRenewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
