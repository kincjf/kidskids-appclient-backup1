import { async, TestBed } from '@angular/core/testing';
import { ShareuiOrdersModule } from './shareui-orders.module';

describe('ShareuiOrdersModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ShareuiOrdersModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ShareuiOrdersModule).toBeDefined();
  });
});
