import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Currency } from '@ecom9/models';
import { map, groupBy, mergeMap, toArray, reduce, filter, flatMap } from 'rxjs/operators';

@Injectable()
export class CurrenciesService {
    constructor(private httpClient: HttpClient) { }

    /**
     * Retrieve list of category
     */
    retrieveCurrencies(): Observable<Currency[]> {
        return this.httpClient.get<Currency[]>(`assets/db/currencies.json`);
    }

    retrieveCurrentCurrency(): Observable<Currency> {
        return this.httpClient.get<Currency[]>(`assets/db/currencies.json`)
            .pipe(
                flatMap(currencies => currencies),
                filter((currency: Currency) => currency.code === 'USD')
            );
    }
}
