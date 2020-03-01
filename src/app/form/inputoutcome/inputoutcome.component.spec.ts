import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputoutcomeComponent } from './inputoutcome.component';

describe('InputoutcomeComponent', () => {
  let component: InputoutcomeComponent;
  let fixture: ComponentFixture<InputoutcomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputoutcomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputoutcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
