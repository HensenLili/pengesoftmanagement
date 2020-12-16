import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizeUnitComponent } from './organize-unit.component';

describe('OrganizeUnitComponent', () => {
  let component: OrganizeUnitComponent;
  let fixture: ComponentFixture<OrganizeUnitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrganizeUnitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganizeUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
