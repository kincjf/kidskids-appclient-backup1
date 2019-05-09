import { Injectable } from '@angular/core';
import { catchError, concatMap, map, filter } from 'rxjs/operators';
import { Observable, of as observableOf, throwError, defer } from 'rxjs';
import { StorageService } from './storage.service';

const WISHLIST_PREFIX = 'wishlist';

@Injectable(
    { providedIn: 'root' }
)
export class WishlistService {
    constructor(private storageService: StorageService) { }

    addToWishlist(payload: { id: number, color: string }): Observable<void> {
        return this.getWishlistItems().pipe(
            concatMap(
                ids =>
                    (ids.filter(item => {
                        return (item.id === payload.id) && (item.color === payload.color);
                    })).length >= 2
                        ? throwError('Over capacities')
                        : this.storageService.set(WISHLIST_PREFIX, JSON.stringify([...ids, payload]))
            )
        );
    }

    removeOne(payload: { id: number, color: string }): Observable<void> {
        return this.getWishlistItems().pipe(
            concatMap(ids => {
                const pos = [];
                for (let i = 0; i < ids.length; i++) {
                    if (ids[i].id === payload.id && ids[i].color === payload.color) {
                        pos.push(i);
                    }
                }

                for (let i = pos.length - 1; i >= 0; i--) {
                    ids.splice(pos[i], 1);
                }

                return this.storageService.set(WISHLIST_PREFIX, JSON.stringify(ids));
            })
        );
    }

    removeAll(): Observable<void> {
        return this.storageService.set(WISHLIST_PREFIX, '');
    }

    getWishlistItems(): Observable<{ id: number, color: string }[]> {
        return this.storageService
            .fetch(WISHLIST_PREFIX)
            .pipe(map(ids => (ids ? JSON.parse(ids) : [])));
    }
}
