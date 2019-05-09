import { Action } from '@ngrx/store';
import { Currency } from '@ecom9/models';

export enum CurrencyActionTypes {
    LoadCurrency = '[Shop] Load  Currency',
    LoadCurrencySuccess = '[Shop] Load  Currency Success',
    LoadCurrencyError = '[Shop] Load  Currency Error',

    LoadCurrencies = '[Shop] Load  Currencies',
    LoadCurrenciesSuccess = '[Shop] Load  Currencies Success',
    LoadCurrenciesError = '[Shop] Load  Currencies Error',

    SelectCurrency = '[Shop] Select Currency',
}

export class LoadCurrency implements Action {
    readonly type = CurrencyActionTypes.LoadCurrency;
}

export class LoadCurrencySuccess implements Action {
    readonly type = CurrencyActionTypes.LoadCurrencySuccess;
    constructor(public readonly payload: { currency: Currency }) {
        console.log(payload);
    }
}

export class LoadCurrencyError implements Action {
    readonly type = CurrencyActionTypes.LoadCurrencyError;
    constructor(public readonly payload: { error: string }) { }
}

export class LoadCurrencies implements Action {
    readonly type = CurrencyActionTypes.LoadCurrencies;
}

export class LoadCurrenciesSuccess implements Action {
    readonly type = CurrencyActionTypes.LoadCurrenciesSuccess;
    constructor(public readonly payload: { currencies: Currency[] }) {
        console.log(payload);
    }
}

export class LoadCurrenciesError implements Action {
    readonly type = CurrencyActionTypes.LoadCurrenciesError;
    constructor(public readonly payload: { error: string }) { }
}

export class SelectCurrency implements Action {
    readonly type = CurrencyActionTypes.SelectCurrency;
    constructor(public readonly payload: { code: string }) {
    }
}

export type CurrencyActions = LoadCurrency
    | LoadCurrencyError
    | LoadCurrencySuccess
    | LoadCurrencies
    | LoadCurrenciesSuccess
    | LoadCurrenciesError
    | SelectCurrency;
