import { async, TestBed } from '@angular/core/testing';
import { ShareuiAddressModule } from './shareui-address.module';

describe('ShareuiAddressModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ShareuiAddressModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ShareuiAddressModule).toBeDefined();
  });
});
