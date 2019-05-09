import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { Customer, LoginPayload } from '@ecom9/models';
import { map, groupBy, mergeMap, toArray, reduce } from 'rxjs/operators';

@Injectable()
export class AuthService {
    constructor(private httpClient: HttpClient) { }

    login(payload: LoginPayload): Observable<Customer> {
        const customer: Customer = {
            first_name: payload.email.split('@')[0],
            last_name: payload.email.split('@')[1],
            email: payload.email
        };
        return of(customer);
    }
}
