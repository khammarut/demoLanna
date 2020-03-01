import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputoutComponent } from './inputout.component';

describe('InputoutComponent', () => {
  let component: InputoutComponent;
  let fixture: ComponentFixture<InputoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
