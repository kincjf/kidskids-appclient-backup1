import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryListHozComponent } from './category-list-hoz.component';

describe('CategoryListHozComponent', () => {
  let component: CategoryListHozComponent;
  let fixture: ComponentFixture<CategoryListHozComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryListHozComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryListHozComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
