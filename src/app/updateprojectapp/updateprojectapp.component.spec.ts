import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateprojectappComponent } from './updateprojectapp.component';

describe('UpdateprojectappComponent', () => {
  let component: UpdateprojectappComponent;
  let fixture: ComponentFixture<UpdateprojectappComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateprojectappComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateprojectappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
