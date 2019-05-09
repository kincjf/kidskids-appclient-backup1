import { async, TestBed } from '@angular/core/testing';
import { ShareuiCurrencyModule } from './shareui-currency.module';

describe('ShareuiCurrencyModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ShareuiCurrencyModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ShareuiCurrencyModule).toBeDefined();
  });
});
