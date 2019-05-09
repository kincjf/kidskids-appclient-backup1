import { async, TestBed } from '@angular/core/testing';
import { ShareuiOrderModule } from './shareui-order.module';

describe('ShareuiOrderModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ShareuiOrderModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ShareuiOrderModule).toBeDefined();
  });
});
