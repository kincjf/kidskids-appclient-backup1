import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Product, ProductVariant, ProductReview } from '@ecom9/models';
import { map } from 'rxjs/operators';

@Injectable()
export class ProductsService {
  constructor(private httpClient: HttpClient) { }

  /**
   * Retrieve list of product
   */
  retrieveProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(`assets/db/products.json`);
  }

  retrieveProductVariants(product_id: number): Observable<ProductVariant[]> {
    return this.httpClient.get<ProductVariant[]>(`assets/db/${product_id}.json`);
  }

  retrieveProductReviews(product_id: number): Observable<ProductReview[]> {
    return this.httpClient.get<ProductReview[]>(`assets/db/reviews.json`)
      .pipe(
        map(reviews => reviews.filter(review => review.product_id === product_id)),
      )
  }

  searchProducts(query: string): Observable<Product[]> {
    return this.httpClient.get<Product[]>(`assets/db/products.json`)
      .pipe(
        map(products => products.filter(product => product.name.indexOf(query) >= 0)),
      )
  }
}
