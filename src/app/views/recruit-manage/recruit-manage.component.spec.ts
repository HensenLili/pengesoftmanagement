import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecruitManageComponent } from './recruit-manage.component';

describe('RecruitManageComponent', () => {
  let component: RecruitManageComponent;
  let fixture: ComponentFixture<RecruitManageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecruitManageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecruitManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
