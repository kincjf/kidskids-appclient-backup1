import { async, TestBed } from '@angular/core/testing';
import { ShareuiProfileModule } from './shareui-profile.module';

describe('ShareuiProfileModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ShareuiProfileModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ShareuiProfileModule).toBeDefined();
  });
});
