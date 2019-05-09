import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryItemHozComponent } from './category-item-hoz.component';

describe('CategoryItemHozComponent', () => {
  let component: CategoryItemHozComponent;
  let fixture: ComponentFixture<CategoryItemHozComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryItemHozComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryItemHozComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
