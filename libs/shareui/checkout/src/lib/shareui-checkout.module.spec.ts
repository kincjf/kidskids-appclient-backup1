import { async, TestBed } from '@angular/core/testing';
import { ShareuiCheckoutModule } from './shareui-checkout.module';

describe('ShareuiCheckoutModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ShareuiCheckoutModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ShareuiCheckoutModule).toBeDefined();
  });
});
