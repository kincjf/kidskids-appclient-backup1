import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Country } from '@ecom9/models';
import { map, groupBy, mergeMap, toArray, reduce } from 'rxjs/operators';

@Injectable()
export class CountriesService {
    constructor(private httpClient: HttpClient) { }

    /**
     * Retrieve list of category
     */
    retrieveCountries(): Observable<Country[]> {
        return this.httpClient.get<Country[]>(`assets/db/countries.json`);
    }
}
