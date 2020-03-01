import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertriskComponent } from './insertrisk.component';

describe('InsertriskComponent', () => {
  let component: InsertriskComponent;
  let fixture: ComponentFixture<InsertriskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertriskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertriskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
