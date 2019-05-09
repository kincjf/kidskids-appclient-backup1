import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as fromWishlist from '../actions/wishlist.actions';
import { concatMap, map, catchError, startWith } from 'rxjs/operators';
import { WishlistService } from '@ecom9/nobackend';
import { of, Observable } from 'rxjs';
import { Action } from '@ngrx/store';

@Injectable()
export class WishlistEffects {

    @Effect()
    addItem$: Observable<Action> = this.actions$.pipe(
        ofType<fromWishlist.AddItem>(fromWishlist.WishlistActionTypes.AddItem),
        concatMap((action) =>
            this.wishlistService.addToWishlist(action.payload).pipe(
                map(() => new fromWishlist.AddItemSuccess()),
                catchError((error) => of(new fromWishlist.AddItemError(error)))
            )
        )
    );

    @Effect()
    fetchWishlistItems: Observable<Action> = this.actions$.pipe(
        ofType<fromWishlist.FetchItems>(fromWishlist.WishlistActionTypes.FetchItems),
        startWith(new fromWishlist.FetchItems()),
        concatMap((action) =>
            this.wishlistService.getWishlistItems().pipe(
                map((items) => new fromWishlist.FetchItemsSuccess({ itemIds: items })),
                catchError((error) => of(new fromWishlist.FetchItemsError({ error })))
            )
        )
    );

    @Effect()
    removeItem$: Observable<Action> = this.actions$.pipe(
        ofType<fromWishlist.RemoveItem>(fromWishlist.WishlistActionTypes.RemoveItem),
        concatMap((action) =>
            this.wishlistService.removeOne(action.payload).pipe(
                map(() => new fromWishlist.RemoveItemSuccess()),
                catchError((error) => of(new fromWishlist.RemoveItemError(error)))
            )
        )
    );

    constructor(private actions$: Actions, private wishlistService: WishlistService) { }
}
