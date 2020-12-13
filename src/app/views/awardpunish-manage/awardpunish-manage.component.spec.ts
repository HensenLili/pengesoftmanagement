import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AwardpunishManageComponent } from './awardpunish-manage.component';

describe('AwardpunishManageComponent', () => {
  let component: AwardpunishManageComponent;
  let fixture: ComponentFixture<AwardpunishManageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AwardpunishManageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AwardpunishManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
