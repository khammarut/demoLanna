import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiddleUserPageComponent } from './middle-user-page.component';

describe('MiddleUserPageComponent', () => {
  let component: MiddleUserPageComponent;
  let fixture: ComponentFixture<MiddleUserPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiddleUserPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiddleUserPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
