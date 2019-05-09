import { async, TestBed } from '@angular/core/testing';
import { ShareuiCategoriesHozModule } from './shareui-categories-hoz.module';

describe('ShareuiCategoriesHozModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ShareuiCategoriesHozModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ShareuiCategoriesHozModule).toBeDefined();
  });
});
