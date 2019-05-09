import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as currencyActions from '../actions/currency.actions';

import { startWith, switchMap, map, catchError } from 'rxjs/operators';
import { CurrenciesService } from '@ecom9/nobackend';
import { of as observableOf } from 'rxjs';

@Injectable()
export class CurrencyEffects {

    @Effect()
    loadCurrencies$ = this.actions$.pipe(
        ofType(currencyActions.CurrencyActionTypes.LoadCurrencies),
        startWith(new currencyActions.LoadCurrencies()),
        switchMap(action => {
            return this.currencyService.retrieveCurrencies()
                .pipe(
                    map((res: any) => new currencyActions.LoadCurrenciesSuccess({ currencies: res })),
                    catchError(error => observableOf(new currencyActions.LoadCurrenciesError({ error })))
                );
        })
    );


    @Effect()
    loadCurrentCurrency$ = this.actions$.pipe(
        ofType(currencyActions.CurrencyActionTypes.LoadCurrency),
        startWith(new currencyActions.LoadCurrencies()),
        switchMap(action => {
            return this.currencyService.retrieveCurrentCurrency()
                .pipe(
                    map((res: any) => new currencyActions.LoadCurrencySuccess({ currency: res })),
                    catchError(error => observableOf(new currencyActions.LoadCurrencyError({ error })))
                );
        })
    );

    constructor(private actions$: Actions, private currencyService: CurrenciesService) { }
}
