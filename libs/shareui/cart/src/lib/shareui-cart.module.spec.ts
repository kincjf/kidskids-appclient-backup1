import { async, TestBed } from '@angular/core/testing';
import { ShareuiCartModule } from './shareui-cart.module';

describe('ShareuiCartModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ShareuiCartModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ShareuiCartModule).toBeDefined();
  });
});
