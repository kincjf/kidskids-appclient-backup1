import { async, TestBed } from '@angular/core/testing';
import { ShareuiSocialModule } from './shareui-social.module';

describe('ShareuiSocialModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ShareuiSocialModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ShareuiSocialModule).toBeDefined();
  });
});
