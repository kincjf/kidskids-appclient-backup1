import { async, TestBed } from '@angular/core/testing';
import { ShareuiLoginModule } from './shareui-login.module';

describe('ShareuiLoginModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ShareuiLoginModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ShareuiLoginModule).toBeDefined();
  });
});
