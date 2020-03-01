import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputbudgetComponent } from './inputbudget.component';

describe('InputbudgetComponent', () => {
  let component: InputbudgetComponent;
  let fixture: ComponentFixture<InputbudgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputbudgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputbudgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
