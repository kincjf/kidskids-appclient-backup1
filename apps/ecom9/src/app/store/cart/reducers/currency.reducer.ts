import { createEntityAdapter, EntityState, EntityAdapter } from '@ngrx/entity';
import { Action } from '@ngrx/store';
import { CurrencyActions, CurrencyActionTypes } from '../actions/currency.actions';
import { Currency } from '@ecom9/models';

export interface State extends EntityState<Currency> {
    isLoading: boolean;
    error: any;
    currency: Currency;
    selectCode: string;
}

export const adapter: EntityAdapter<Currency> = createEntityAdapter({
    selectId: (currency: Currency) => currency.code,
});

export const initialState: State = adapter.getInitialState({
    isLoading: true,
    error: null,
    currency: null,
    selectCode: null,
});

export function reducer(state = initialState, action: CurrencyActions): State {
    switch (action.type) {

        case CurrencyActionTypes.LoadCurrency: {
            return {
                ...state,
                isLoading: true,
            };
        }

        case CurrencyActionTypes.LoadCurrencySuccess: {
            return adapter.upsertOne(action.payload.currency, {
                ...state,
                isLoading: false,
                currency: action.payload.currency,
                selectCode: action.payload.currency.code
            });
        }

        case CurrencyActionTypes.LoadCurrencyError: {
            return {
                ...state,
                isLoading: false,
                error: action
            };
        }

        case CurrencyActionTypes.LoadCurrencies: {
            return {
                ...state,
                isLoading: true,
            };
        }

        case CurrencyActionTypes.LoadCurrenciesSuccess: {
            return adapter.addAll(action.payload.currencies, {
                ...state,
                isLoading: false
            });
        }

        case CurrencyActionTypes.LoadCurrenciesError: {
            return {
                ...state,
                isLoading: false,
                error: action
            };
        }

        case CurrencyActionTypes.SelectCurrency: {
            return {
                ...state,
                selectCode: action.payload.code
            };
        }

        default:
            return state;
    }
}

export const getIsLoading = (state: State) => state.isLoading;
export const getError = (state: State) => state.error;
export const getSelectedCurrency = (state: State) => state.currency;
export const getSelectedCode = (state: State) => state.selectCode;

