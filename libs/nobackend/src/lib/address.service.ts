import { Injectable } from '@angular/core';
import { concatMap, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { StorageService } from './storage.service';
import { Address } from '@ecom9/models';

const ADDRESS_PREFIX = 'address';

@Injectable({
    providedIn: 'root'
})
export class AddressService {
    constructor(private storageService: StorageService) { }

    add(payload: Address): Observable<void> {
        return this.getAllAddress().pipe(
            concatMap(
                ids =>
                    (ids.filter(item => {
                        return item.id === payload.id;
                    })).length >= 2
                        ? throwError('Over capacities')
                        : this.storageService.set(ADDRESS_PREFIX, JSON.stringify([...ids, payload]))
            )
        );
    }

    UpdateOne(payload: Address): Observable<void> {
        return this.getAllAddress().pipe(
            concatMap(ids => {
                for (let i = 0; i < ids.length; i++) {
                    if (ids[i].id === payload.id) {
                        ids[i] = payload;
                    }
                }

                return this.storageService.set(ADDRESS_PREFIX, JSON.stringify(ids));
            })
        );
    }

    UpdateDefault(payload: Address): Observable<Address[]> {
        return this.getAllAddress().pipe(
            concatMap(ids => {
                for (let i = 0; i < ids.length; i++) {
                    if (ids[i].id === payload.id) {
                        ids[i] = payload;
                    } else {
                        ids[i].default = false;
                    }
                }

                this.storageService.set(ADDRESS_PREFIX, JSON.stringify(ids)).subscribe(() => {

                });

                return this.storageService
                    .fetch(ADDRESS_PREFIX)
                    .pipe(map(items => (items ? JSON.parse(items) : [])));
            })
        );
    }

    removeOne(payload: string): Observable<void> {
        return this.getAllAddress().pipe(
            concatMap(ids => {
                let pos = -1;
                for (let i = 0; i < ids.length; i++) {
                    if (ids[i].id === payload) {
                        pos = i;
                    }
                }

                if (pos >= 0) {
                    ids.splice(pos, 1);
                }

                return this.storageService.set(ADDRESS_PREFIX, JSON.stringify(ids));
            })
        );
    }

    removeAll(): Observable<void> {
        return this.storageService.set(ADDRESS_PREFIX, '');
    }

    getAllAddress(): Observable<Address[]> {
        return this.storageService
            .fetch(ADDRESS_PREFIX)
            .pipe(map(ids => (ids ? JSON.parse(ids) : [])));
    }
}
