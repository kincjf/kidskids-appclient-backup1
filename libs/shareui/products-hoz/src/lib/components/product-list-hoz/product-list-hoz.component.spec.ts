import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListHozComponent } from './product-list-hoz.component';

describe('ProductListHozComponent', () => {
  let component: ProductListHozComponent;
  let fixture: ComponentFixture<ProductListHozComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProductListHozComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListHozComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
