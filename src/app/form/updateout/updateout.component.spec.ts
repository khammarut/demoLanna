import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateoutComponent } from './updateout.component';

describe('UpdateoutComponent', () => {
  let component: UpdateoutComponent;
  let fixture: ComponentFixture<UpdateoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
