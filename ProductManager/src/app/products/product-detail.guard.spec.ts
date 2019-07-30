import { TestBed, async, inject } from '@angular/core/testing';

import { ProductDetailGuard } from './product-detail.guard';

describe('ProductDetail.GuardGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductDetailGuard]
    });
  });

  it('should ...', inject([ProductDetailGuard], (guard: ProductDetailGuard) => {
    expect(guard).toBeTruthy();
  }));
});
