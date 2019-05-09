import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as fromAddress from '../actions/address.actions';
import { tap, concatMap, map, catchError, startWith } from 'rxjs/operators';
import { AddressService } from '@ecom9/nobackend';
import { of, Observable } from 'rxjs';
import { Action } from '@ngrx/store';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Injectable()
export class AddressEffects {

    @Effect()
    addItem$: Observable<Action> = this.actions$.pipe(
        ofType<fromAddress.AddItem>(fromAddress.AddressActionTypes.AddItem),
        concatMap((action) =>
            this.addressService.add(action.payload).pipe(
                map(() => new fromAddress.AddItemSuccess(action.payload)),
                catchError((error) => of(new fromAddress.AddItemError(error)))
            )
        )
    );

    @Effect()
    updateItem: Observable<Action> = this.actions$.pipe(
        ofType<fromAddress.UpdateItem>(fromAddress.AddressActionTypes.UpdateItem),
        concatMap((action) =>
            this.addressService.UpdateOne(action.payload).pipe(
                map(() => new fromAddress.UpdateItemSuccess({
                    id: action.payload.id,
                    changes: action.payload
                })),
                catchError((error) => of(new fromAddress.UpdateItemError(error)))
            )
        )
    );

    @Effect({ dispatch: false })
    createSuccess$ = this.actions$.pipe(
        ofType(fromAddress.AddressActionTypes.AddItemSuccess),
        tap(() => {
            this.navCtrl.back();
        })
    );

    @Effect({ dispatch: false })
    updateSuccess$ = this.actions$.pipe(
        ofType(fromAddress.AddressActionTypes.UpdateItemSuccess),
        tap(() => {
            this.navCtrl.back();
        })
    );

    @Effect()
    updateDefaultItem$: Observable<Action> = this.actions$.pipe(
        ofType<fromAddress.UpdateDefaultItem>(fromAddress.AddressActionTypes.UpdateDefaultItem),
        concatMap((action) =>
            this.addressService.UpdateDefault(action.payload).pipe(
                // tslint:disable-next-line:arrow-return-shorthand
                map(data => data.map(item => { return { id: item.id, changes: item }; })),
                map((data) => new fromAddress.UpdateDefaultItemSuccess(data)),
                catchError((error) => of(new fromAddress.UpdateItemError(error)))
            )
        )
    );

    @Effect()
    fetchAddressItems: Observable<Action> = this.actions$.pipe(
        ofType<fromAddress.FetchItems>(fromAddress.AddressActionTypes.FetchItems),
        startWith(new fromAddress.FetchItems()),
        concatMap((action) =>
            this.addressService.getAllAddress().pipe(
                map((items) => new fromAddress.FetchItemsSuccess({ itemIds: items })),
                catchError((error) => of(new fromAddress.FetchItemsError({ error })))
            )
        )
    );

    @Effect()
    removeItem$: Observable<Action> = this.actions$.pipe(
        ofType<fromAddress.RemoveItem>(fromAddress.AddressActionTypes.RemoveItem),
        concatMap((action) =>
            this.addressService.removeOne(action.payload).pipe(
                map(() => new fromAddress.RemoveItemSuccess(action.payload)),
                catchError((error) => of(new fromAddress.RemoveItemError(error)))
            )
        )
    );

    constructor(
        private actions$: Actions,
        private addressService: AddressService,
        private navCtrl: NavController,
    ) { }
}
