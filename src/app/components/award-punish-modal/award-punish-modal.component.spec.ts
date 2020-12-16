import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AwardPunishModalComponent } from './award-punish-modal.component';

describe('AwardPunishModalComponent', () => {
  let component: AwardPunishModalComponent;
  let fixture: ComponentFixture<AwardPunishModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AwardPunishModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AwardPunishModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
