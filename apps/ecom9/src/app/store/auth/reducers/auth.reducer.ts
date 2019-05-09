import { Action } from '@ngrx/store';
import { AuthActions, AuthActionTypes } from '../actions/auth.actions';
import { Customer } from '@ecom9/models';

export interface State {
    isAuthenticated: boolean;
    user: Customer | null;
    customer: Customer;
}

export const initialState: State = {
    isAuthenticated: false,
    user: null,
    customer: null,
};

export function reducer(state = initialState, action: AuthActions): State {
    switch (action.type) {

        case AuthActionTypes.AuthLogin:
            return state;

        case AuthActionTypes.AuthLoginSuccess: {
            return {
                ...state,
                isAuthenticated: true,
                customer: action.payload.customer
            };
        }

        case AuthActionTypes.LoadCustomerSuccess: {
            return {
                ...state,
                isAuthenticated: true,
                customer: action.payload.customer
            };
        }

        case AuthActionTypes.LoadLocalCustomerSuccess: {
            return {
                ...state,
                isAuthenticated: true,
                customer: action.payload.customer
            };
        }

        case AuthActionTypes.LoadLocalCustomerFail: {
            return {
                ...state,
                isAuthenticated: false,
                customer: null,
            };
        }

        default:
            return state;
    }
}

export const getIsAuthenticated = (state: State) => state.isAuthenticated;
export const getUser = (state: State) => state.user;
export const getCustomer = (state: State) => state.customer;

