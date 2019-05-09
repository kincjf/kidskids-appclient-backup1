import { Injectable } from '@angular/core';
import { catchError, concatMap, map, filter } from 'rxjs/operators';
import { Observable, of as observableOf, throwError, defer } from 'rxjs';
import { StorageService } from './storage.service';

const CART_PREFIX = 'cart';

@Injectable(
    { providedIn: 'root' }
)
export class CartService {
    constructor(private storageService: StorageService) { }

    addToCart(payload: { id: number, variant: number, price: number, images: any[], color: string }): Observable<void> {
        return this.getCartItems().pipe(
            concatMap(
                ids => this.storageService.set(CART_PREFIX, JSON.stringify([...ids, payload]))
            )
        );
    }

    removeOne(payload: { id: number, variant: number, price: number, images: any[], color: string }): Observable<void> {
        return this.getCartItems().pipe(
            concatMap(ids => {
                let pos = -1;
                for (let i = 0; i < ids.length; i++) {
                    if (payload.color) {
                        if (ids[i].id === payload.id && ids[i].color === payload.color) {
                            pos = i;
                        }
                    } else {
                        if (ids[i].id === payload.id) {
                            pos = i;
                        }
                    }
                }

                if (pos >= 0) {
                    ids.splice(pos, 1);
                }

                return this.storageService.set(CART_PREFIX, JSON.stringify(ids));
            })
        );
    }

    removeItem(payload: { id: number, variant: number, price: number, images: any[], color: string }): Observable<void> {
        return this.getCartItems().pipe(
            concatMap(ids => {
                const pos = [];
                for (let i = 0; i < ids.length; i++) {
                    if (payload.color) {
                        if (ids[i].id === payload.id && ids[i].color === payload.color) {
                            pos.push(i);
                        }
                    } else {
                        if (ids[i].id === payload.id) {
                            pos.push(i);
                        }
                    }
                }

                for (let i = pos.length - 1; i >= 0; i--) {
                    ids.splice(pos[i], 1);
                }

                return this.storageService.set(CART_PREFIX, JSON.stringify(ids));
            })
        );
    }

    removeAll(): Observable<void> {
        return this.storageService.set(CART_PREFIX, '');
    }

    getCartItems(): Observable<{ id: number, variant: number, price: number, images: any[], color: string }[]> {
        return this.storageService
            .fetch(CART_PREFIX)
            .pipe(map(ids => (ids ? JSON.parse(ids) : [])));
    }
}
