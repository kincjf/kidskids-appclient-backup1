import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedAddressPage } from './selected-address.page';

describe('SelectedAddressPage', () => {
  let component: SelectedAddressPage;
  let fixture: ComponentFixture<SelectedAddressPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SelectedAddressPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectedAddressPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
