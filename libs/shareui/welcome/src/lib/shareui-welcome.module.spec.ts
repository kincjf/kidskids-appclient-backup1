import { async, TestBed } from '@angular/core/testing';
import { ShareuiWelcomeModule } from './shareui-welcome.module';

describe('ShareuiWelcomeModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ShareuiWelcomeModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ShareuiWelcomeModule).toBeDefined();
  });
});
