import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatriskComponent } from './updatrisk.component';

describe('UpdatriskComponent', () => {
  let component: UpdatriskComponent;
  let fixture: ComponentFixture<UpdatriskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatriskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatriskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
