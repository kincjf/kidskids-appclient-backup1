import { async, TestBed } from '@angular/core/testing';
import { ShareuiProductModule } from './shareui-product.module';

describe('ShareuiProductModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ShareuiProductModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ShareuiProductModule).toBeDefined();
  });
});
