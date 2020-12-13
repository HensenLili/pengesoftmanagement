import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizeManageComponent } from './organize-manage.component';

describe('OrganizeManageComponent', () => {
  let component: OrganizeManageComponent;
  let fixture: ComponentFixture<OrganizeManageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrganizeManageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganizeManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
