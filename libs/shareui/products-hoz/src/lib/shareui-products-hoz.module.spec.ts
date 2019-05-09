import { async, TestBed } from '@angular/core/testing';
import { ShareuiProductsHozModule } from './shareui-products-hoz.module';

describe('ShareuiProductsHozModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ShareuiProductsHozModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ShareuiProductsHozModule).toBeDefined();
  });
});
