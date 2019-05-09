import { async, TestBed } from '@angular/core/testing';
import { ShareuiForgotModule } from './shareui-forgot.module';

describe('ShareuiForgotModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ShareuiForgotModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ShareuiForgotModule).toBeDefined();
  });
});
