import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatelastbudgetComponent } from './updatelastbudget.component';

describe('UpdatelastbudgetComponent', () => {
  let component: UpdatelastbudgetComponent;
  let fixture: ComponentFixture<UpdatelastbudgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatelastbudgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatelastbudgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
