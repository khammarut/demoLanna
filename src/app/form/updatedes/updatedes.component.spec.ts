import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatedesComponent } from './updatedes.component';

describe('UpdatedesComponent', () => {
  let component: UpdatedesComponent;
  let fixture: ComponentFixture<UpdatedesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatedesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatedesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
