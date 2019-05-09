import { Injectable } from '@angular/core';
import { defer, Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class StorageService {
    fetch(key: string): Observable<string | null> {
        return defer(() =>
            of(window.localStorage.getItem(key))
        );
    }

    set(key: string, value: string): Observable<void> {
        return defer(() =>
            of(window.localStorage.setItem(key, value))
        );
    }

    remove(key: string): Observable<void> {
        return defer(() =>
            of(window.localStorage.removeItem(key))
        );
    }
}
