import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatstepComponent } from './updatstep.component';

describe('UpdatstepComponent', () => {
  let component: UpdatstepComponent;
  let fixture: ComponentFixture<UpdatstepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatstepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatstepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
