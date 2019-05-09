import { async, TestBed } from '@angular/core/testing';
import { ShareuiMenuModule } from './shareui-menu.module';

describe('ShareuiMenuModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ShareuiMenuModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ShareuiMenuModule).toBeDefined();
  });
});
