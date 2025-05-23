import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KeypadComponent } from './keypad.component';

describe('Keypadomponent', () => {
  let component: KeypadComponent;
  let fixture: ComponentFixture<KeypadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeypadComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeypadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
