import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';

import { AuthService } from '@ecom9/nobackend';

import * as authActions from '../actions/auth.actions';
import { of as observableOf } from 'rxjs';
import { switchMap, catchError, map, tap, startWith } from 'rxjs/operators';
import { NavController } from '@ionic/angular';

@Injectable()
export class AuthEffects {

  @Effect()
  login$ = this.actions$.pipe(
    ofType(authActions.AuthActionTypes.AuthLogin),
    map((action: authActions.AuthLogin) => action),
    switchMap(action => {
      return this.authService.login(action.payload.user)
        .pipe(
          map((res: any) => new authActions.AuthLoginSuccess({ customer: res })),
          catchError(error => observableOf(new authActions.AuthLoginFail({ error })))
        );
    })
  );

  @Effect({ dispatch: false })
  loadCustomerSuccess$ = this.actions$.pipe(
    ofType(authActions.AuthActionTypes.LoadCustomerSuccess),
    map((action: authActions.LoadCustomerSuccess) => action.payload.customer)
  );

  @Effect({ dispatch: false })
  loginSuccess$ = this.actions$.pipe(
    ofType(authActions.AuthActionTypes.AuthLoginSuccess),
    map((action: authActions.AuthLoginSuccess) => action.payload.customer),
    tap(() => {
      this.navCtrl.back();
    })
  );

  constructor(private actions$: Actions,
    private navCtrl: NavController,
    private authService: AuthService
  ) { }
}
