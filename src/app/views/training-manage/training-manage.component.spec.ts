import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingManageComponent } from './training-manage.component';

describe('TrainingManageComponent', () => {
  let component: TrainingManageComponent;
  let fixture: ComponentFixture<TrainingManageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainingManageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
