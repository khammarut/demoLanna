import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatebudgetComponent } from './updatebudget.component';

describe('UpdatebudgetComponent', () => {
  let component: UpdatebudgetComponent;
  let fixture: ComponentFixture<UpdatebudgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatebudgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatebudgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
