import { async, TestBed } from '@angular/core/testing';
import { ShareuiCategoriesModule } from './shareui-categories.module';

describe('ShareuiCategoriesModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ShareuiCategoriesModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ShareuiCategoriesModule).toBeDefined();
  });
});
