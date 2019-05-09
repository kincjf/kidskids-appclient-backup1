import { async, TestBed } from '@angular/core/testing';
import { NobackendModule } from './nobackend.module';

describe('NobackendModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NobackendModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(NobackendModule).toBeDefined();
  });
});
