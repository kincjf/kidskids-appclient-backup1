import { createEntityAdapter, EntityState, EntityAdapter } from '@ngrx/entity';
import { CountriesActions, CountriesActionTypes } from '../actions/country.actions';
import { Country } from '@ecom9/models';

export interface State extends EntityState<Country> {
    isLoading: boolean;
    error: any;
    selectedId: string;
}

export const adapter: EntityAdapter<Country> = createEntityAdapter({
    selectId: (address: Country) => address.code,
});

export const initialState: State = adapter.getInitialState({
    isLoading: true,
    error: null,
    selectedId: null,
});

export function reducer(state = initialState, action: CountriesActions): State {
    switch (action.type) {

        case CountriesActionTypes.LoadCountries: {
            return {
                ...state,
                isLoading: true,
                error: null,
            };
        }

        case CountriesActionTypes.LoadCountriesSuccess: {
            return adapter.addAll(action.payload.countries, {
                ...state,
                isLoading: false,
                error: null,
            });
        }

        case CountriesActionTypes.LoadCountriesError: {
            return {
                ...state,
                isLoading: false,
                error: action.payload.error,
            };
        }

        case CountriesActionTypes.SelectCountry: {
            return {
                ...state,
                isLoading: false,
                error: null,
                selectedId: action.payload.code
            };
        }

        default:
            return state;
    }
}

export const getIsLoading = (state: State) => state.isLoading;
export const getError = (state: State) => state.error;
export const getSelectedId = (state: State) => state.selectedId;
