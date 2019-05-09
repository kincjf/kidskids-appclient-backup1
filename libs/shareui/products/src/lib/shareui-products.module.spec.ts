import { async, TestBed } from '@angular/core/testing';
import { ShareuiProductsModule } from './shareui-products.module';

describe('ShareuiProductsModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ShareuiProductsModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ShareuiProductsModule).toBeDefined();
  });
});
