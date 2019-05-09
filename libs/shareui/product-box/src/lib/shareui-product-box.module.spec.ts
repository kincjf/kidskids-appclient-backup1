import { async, TestBed } from '@angular/core/testing';
import { ShareuiProductBoxModule } from './shareui-product-box.module';

describe('ShareuiProductBoxModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ShareuiProductBoxModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ShareuiProductBoxModule).toBeDefined();
  });
});
