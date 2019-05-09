import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as orderActions from '../actions/order.actions';
import { map } from 'rxjs/operators';

@Injectable()
export class OrderEffects {

    @Effect()
    addOrder$ = this.actions$.pipe(
        ofType(orderActions.OrderActionTypes.AddOrder),
        map((action: orderActions.AddOrder) => action.payload),
        map(order => {
            return new orderActions.AddOrderSuccess(order);
        })
    );

    constructor(private actions$: Actions) { }
}
