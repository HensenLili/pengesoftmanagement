import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StaffContractOverModalComponent } from './staff-contract-over-modal.component';

describe('StaffContractOverModalComponent', () => {
  let component: StaffContractOverModalComponent;
  let fixture: ComponentFixture<StaffContractOverModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaffContractOverModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffContractOverModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
