import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTabViewComponent } from './my-tab-view.component';

describe('MyTabViewComponent', () => {
  let component: MyTabViewComponent;
  let fixture: ComponentFixture<MyTabViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyTabViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyTabViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
