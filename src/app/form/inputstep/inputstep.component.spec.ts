import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputstepComponent } from './inputstep.component';

describe('InputstepComponent', () => {
  let component: InputstepComponent;
  let fixture: ComponentFixture<InputstepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputstepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputstepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
