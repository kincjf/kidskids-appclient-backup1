import { ProductActions, ProductActionTypes } from '../actions/product.actions';

export interface State {
    ids: number[];
    loading: boolean;
    error: string;
    query: string;
}

const initialState: State = {
    ids: [],
    loading: false,
    error: null,
    query: null,
};

export function reducer(state = initialState, action: ProductActions): State {
    switch (action.type) {
        case ProductActionTypes.Search: {
            const query = action.payload.query;

            if (query === null) {
                return initialState;
            }

            return {
                ...state,
                loading: true,
                error: null,
                query
            };
        }

        case ProductActionTypes.SearchComplete: {
            return {
                ids: action.payload.items.map(product => product.id),
                loading: false,
                error: '',
                query: state.query,
            };
        }

        case ProductActionTypes.SearchError: {
            return {
                ...state,
                loading: false,
                error: action.payload.error
            };
        }

        default:
            return state;
    }
}

export const getIds = (state: State) => state.ids;
export const getQuery = (state: State) => state.query;
export const getLoading = (state: State) => state.loading;
export const getError = (state: State) => state.error;
