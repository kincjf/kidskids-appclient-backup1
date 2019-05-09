import { async, TestBed } from '@angular/core/testing';
import { ShareuiSignupModule } from './shareui-signup.module';

describe('ShareuiSignupModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ShareuiSignupModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ShareuiSignupModule).toBeDefined();
  });
});
