import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as countryActions from '../actions/country.actions';

import { startWith, switchMap, map, catchError } from 'rxjs/operators';
import { CountriesService } from '@ecom9/nobackend';
import { of as observableOf } from 'rxjs';

@Injectable()
export class CountryEffects {

    @Effect()
    loadCountries$ = this.actions$.pipe(
        ofType(countryActions.CountriesActionTypes.LoadCountries),
        startWith(new countryActions.LoadCountries()),
        switchMap(action => {
            return this.countryService.retrieveCountries()
                .pipe(
                    map((res: any) => new countryActions.LoadCountriesSuccess({ countries: res })),
                    catchError(error => observableOf(new countryActions.LoadCountriesError({ error })))
                );
        })
    );

    constructor(private actions$: Actions, private countryService: CountriesService) { }
}
