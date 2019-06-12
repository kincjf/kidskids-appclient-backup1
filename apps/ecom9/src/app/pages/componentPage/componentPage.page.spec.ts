import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { componentPage } from './componentPage.page';

describe('componentPage', () => {
  let component: componentPage;
  let fixture: ComponentFixture<componentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ componentPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(componentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
