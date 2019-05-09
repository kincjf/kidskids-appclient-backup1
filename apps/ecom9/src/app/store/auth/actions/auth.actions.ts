import { Action } from '@ngrx/store';
import { Customer, LoginPayload } from '@ecom9/models';

export enum AuthActionTypes {
    AuthLogin = '[Auth] Login',
    AuthLoginSuccess = '[Auth] Login Success',
    AuthLoginFail = '[Auth] Login Fail',

    LoadCustomer = '[Auth] Load Customer',
    LoadCustomerSuccess = '[Auth] Load Customer Success',
    LoadCustomerFail = '[Auth] Load Customer Fail',

    LoadLocalCustomer = '[Auth] Load Local Customer',
    LoadLocalCustomerSuccess = '[Auth] Load Local Customer Success',
    LoadLocalCustomerFail = '[Auth] Load Local Customer Fail',
}

export class AuthLogin implements Action {
    readonly type = AuthActionTypes.AuthLogin;
    constructor(public payload: { user: LoginPayload }) { }
}

export class AuthLoginSuccess implements Action {
    readonly type = AuthActionTypes.AuthLoginSuccess;
    constructor(public payload: { customer: Customer }) { }
}

export class AuthLoginFail implements Action {
    readonly type = AuthActionTypes.AuthLoginFail;
    constructor(public payload: { error: string }) { }
}

export class LoadCustomer implements Action {
    readonly type = AuthActionTypes.LoadCustomer;
    constructor(public payload: { email: string }) {
    }
}

export class LoadCustomerSuccess implements Action {
    readonly type = AuthActionTypes.LoadCustomerSuccess;
    constructor(public payload: { customer: Customer }) {
    }
}

export class LoadCustomerFail implements Action {
    readonly type = AuthActionTypes.LoadCustomerFail;
    constructor(public payload: { error: string }) { }
}

export class LoadLocalCustomer implements Action {
    readonly type = AuthActionTypes.LoadLocalCustomer;
}

export class LoadLocalCustomerSuccess implements Action {
    readonly type = AuthActionTypes.LoadLocalCustomerSuccess;
    constructor(public payload: { customer: Customer }) {
    }
}

export class LoadLocalCustomerFail implements Action {
    readonly type = AuthActionTypes.LoadLocalCustomerFail;
    constructor(public payload: { error: string }) {
    }
}

export type AuthActions = AuthLogin
    | AuthLoginSuccess
    | AuthLoginFail
    | LoadCustomer
    | LoadCustomerSuccess
    | LoadCustomerFail
    | LoadLocalCustomer
    | LoadLocalCustomerFail
    | LoadLocalCustomerSuccess;
