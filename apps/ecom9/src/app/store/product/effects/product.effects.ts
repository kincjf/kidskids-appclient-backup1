import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as productActions from '../actions/product.actions';
import * as reviewActions from '../actions/review.actions';
import { startWith, switchMap, map, catchError } from 'rxjs/operators';
import { of as observableOf } from 'rxjs';

import { ProductsService } from '@ecom9/nobackend';
import { Product } from '@ecom9/models';

@Injectable()
export class ProductEffects {

  @Effect()
  loadProducts$ = this.actions$.pipe(
    ofType(productActions.ProductActionTypes.LoadProducts),
    startWith(new productActions.LoadProducts),
    switchMap(action => {
      return this.productService.retrieveProducts()
        .pipe(
          map((res: any) => new productActions.LoadProductsSuccess({ items: res })),
          catchError(error => observableOf(new productActions.LoadProductsError({ error })))
        );
    })
  );

  @Effect()
  searchProducts$ = this.actions$.pipe(
    ofType(productActions.ProductActionTypes.Search),
    map((action: productActions.Search) => action.payload),
    switchMap((action) => {
      return this.productService.searchProducts(action.query)
        .pipe(
          map((res: any) => new productActions.SearchComplete({ items: <Product[]>res })),
          catchError(error => {
            return observableOf(new productActions.SearchError({ error }));
          })
        );
    })
  );

  @Effect()
  productReviews$ = this.actions$.pipe(
    ofType(reviewActions.ReviewActionTypes.LoadProductReviews),
    map((action: reviewActions.LoadProductReviews) => action.payload),
    switchMap((action) => {
      return this.productService.retrieveProductReviews(action.product_id)
        .pipe(
          map((res: any) => new reviewActions.LoadProductReviewsSuccess({ items: res })),
          catchError(error => observableOf(new reviewActions.LoadProductReviewsError({ error })))
        );
    })
  );

  constructor(private actions$: Actions, private productService: ProductsService) { }
}
