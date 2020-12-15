import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffContractManageComponent } from './staff-contract-manage.component';

describe('StaffContractManageComponent', () => {
  let component: StaffContractManageComponent;
  let fixture: ComponentFixture<StaffContractManageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaffContractManageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffContractManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
