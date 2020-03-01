import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputdesbudgetComponent } from './inputdesbudget.component';

describe('InputdesbudgetComponent', () => {
  let component: InputdesbudgetComponent;
  let fixture: ComponentFixture<InputdesbudgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputdesbudgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputdesbudgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
