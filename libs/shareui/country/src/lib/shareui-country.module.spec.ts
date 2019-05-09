import { async, TestBed } from '@angular/core/testing';
import { ShareuiCountryModule } from './shareui-country.module';

describe('ShareuiCountryModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ShareuiCountryModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ShareuiCountryModule).toBeDefined();
  });
});
