import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputlastbudgetComponent } from './inputlastbudget.component';

describe('InputlastbudgetComponent', () => {
  let component: InputlastbudgetComponent;
  let fixture: ComponentFixture<InputlastbudgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputlastbudgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputlastbudgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
