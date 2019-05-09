import { async, TestBed } from '@angular/core/testing';
import { ShareuiItemsModule } from './shareui-items.module';

describe('ShareuiItemsModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ShareuiItemsModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ShareuiItemsModule).toBeDefined();
  });
});
