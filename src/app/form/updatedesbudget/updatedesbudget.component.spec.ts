import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatedesbudgetComponent } from './updatedesbudget.component';

describe('UpdatedesbudgetComponent', () => {
  let component: UpdatedesbudgetComponent;
  let fixture: ComponentFixture<UpdatedesbudgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatedesbudgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatedesbudgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
