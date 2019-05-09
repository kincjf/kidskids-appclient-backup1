import { AuthActions, AuthActionTypes } from '../actions/auth.actions';

export interface State {
    error: string | null;
    pending: boolean;
}

export const initialState: State = {
    error: null,
    pending: false,
};

export function reducer(state = initialState, action: AuthActions): State {
    switch (action.type) {
        case AuthActionTypes.AuthLogin: {
            return {
                ...state,
                error: null,
                pending: true,
            };
        }

        case AuthActionTypes.AuthLoginSuccess: {
            return {
                ...state,
                error: null,
                pending: false,
            };
        }

        case AuthActionTypes.AuthLoginFail: {
            return {
                ...state,
                error: action.payload.error,
                pending: false,
            };
        }
    }
}

export const getError = (state: State) => state.error;
export const getPending = (state: State) => state.pending;
