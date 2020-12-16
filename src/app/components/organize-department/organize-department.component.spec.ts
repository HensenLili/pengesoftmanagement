import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizeDepartmentComponent } from './organize-department.component';

describe('OrganizeDepartmentComponent', () => {
  let component: OrganizeDepartmentComponent;
  let fixture: ComponentFixture<OrganizeDepartmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrganizeDepartmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganizeDepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
