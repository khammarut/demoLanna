import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputdesComponent } from './inputdes.component';

describe('InputdesComponent', () => {
  let component: InputdesComponent;
  let fixture: ComponentFixture<InputdesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputdesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputdesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
