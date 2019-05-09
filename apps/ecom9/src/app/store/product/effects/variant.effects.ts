import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as variantActions from '../actions/variant.actions';
import { startWith, switchMap, map, catchError, tap } from 'rxjs/operators';
import { of as observableOf } from 'rxjs';

import { ProductsService } from '@ecom9/nobackend';
import { ProductVariant } from '@ecom9/models';

@Injectable()
export class VariantEffects {
    @Effect()
    loadProductVariants$ = this.actions$.pipe(
        ofType(variantActions.VariantActionTypes.LoadVariants),
        map((action: variantActions.LoadVariants) => action.payload),
        switchMap(action => {
            return this.productService.retrieveProductVariants(action.product_id)
                .pipe(
                    map((res: any) => new variantActions.LoadVariantsSuccess({ items: <ProductVariant[]>res })),
                    catchError(error => observableOf(new variantActions.LoadVariantsError({ error })))
                );
        })
    );
    constructor(private actions$: Actions, private productService: ProductsService) { }
}
