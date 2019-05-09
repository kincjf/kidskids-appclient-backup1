import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as fromCart from '../actions/cart.actions';
import { concatMap, map, catchError, startWith } from 'rxjs/operators';
import { CartService } from '@ecom9/nobackend';
import { of, Observable } from 'rxjs';
import { Action } from '@ngrx/store';

@Injectable()
export class CartEffects {

    @Effect()
    addItem$: Observable<Action> = this.actions$.pipe(
        ofType<fromCart.AddItem>(fromCart.CartActionTypes.AddItem),
        concatMap((action) =>
            this.cartService.addToCart(action.payload).pipe(
                map(() => new fromCart.AddItemSuccess()),
                catchError((error) => of(new fromCart.AddItemError(error)))
            )
        )
    );

    @Effect()
    fetchCartItems: Observable<Action> = this.actions$.pipe(
        ofType<fromCart.FetchItems>(fromCart.CartActionTypes.FetchItems),
        startWith(new fromCart.FetchItems()),
        concatMap((action) =>
            this.cartService.getCartItems().pipe(
                map((items) => new fromCart.FetchItemsSuccess({ itemIds: items })),
                catchError((error) => of(new fromCart.FetchItemsError({ error })))
            )
        )
    );

    @Effect()
    removeItem$: Observable<Action> = this.actions$.pipe(
        ofType<fromCart.RemoveItem>(fromCart.CartActionTypes.RemoveItem),
        concatMap((action) =>
            this.cartService.removeItem(action.payload).pipe(
                map(() => new fromCart.RemoveItemSuccess()),
                catchError((error) => of(new fromCart.RemoveItemError(error)))
            )
        )
    );

    @Effect()
    removeOne$: Observable<Action> = this.actions$.pipe(
        ofType<fromCart.RemoveOne>(fromCart.CartActionTypes.RemoveOne),
        concatMap((action) =>
            this.cartService.removeOne(action.payload).pipe(
                map(() => new fromCart.RemoveOneSuccess()),
                catchError((error) => of(new fromCart.RemoveOneError(error)))
            )
        )
    );

    @Effect()
    removeItems$: Observable<Action> = this.actions$.pipe(
        ofType<fromCart.RemoveAllItems>(fromCart.CartActionTypes.RemoveAllItems),
        concatMap((action) =>
            this.cartService.removeAll().pipe(
                map(() => new fromCart.RemoveAllItemsSuccess()),
                catchError((error) => of(new fromCart.RemoveAllItemsError(error)))
            )
        )
    );

    constructor(private actions$: Actions, private cartService: CartService) { }
}
