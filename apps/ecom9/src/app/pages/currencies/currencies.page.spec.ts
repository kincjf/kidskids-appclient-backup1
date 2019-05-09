import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrenciesPage } from './currencies.page';

describe('CurrenciesPage', () => {
  let component: CurrenciesPage;
  let fixture: ComponentFixture<CurrenciesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrenciesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrenciesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
