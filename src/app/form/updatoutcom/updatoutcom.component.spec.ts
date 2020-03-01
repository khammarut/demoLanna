import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatoutcomComponent } from './updatoutcom.component';

describe('UpdatoutcomComponent', () => {
  let component: UpdatoutcomComponent;
  let fixture: ComponentFixture<UpdatoutcomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatoutcomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatoutcomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
