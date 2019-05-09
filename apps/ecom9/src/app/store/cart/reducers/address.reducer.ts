import { createEntityAdapter, EntityState, EntityAdapter } from '@ngrx/entity';
import { AddressActions, AddressActionTypes } from '../actions/address.actions';
import { Address } from '@ecom9/models';

export interface State extends EntityState<Address> {
    isLoading: boolean;
    error: any;
    selectedId: string;
    chooseId: string;
}

export const adapter: EntityAdapter<Address> = createEntityAdapter({
    selectId: (address: Address) => address.id,
});

export const initialState: State = adapter.getInitialState({
    isLoading: true,
    error: null,
    selectedId: null,
    chooseId: null,
});

export function reducer(state = initialState, action: AddressActions): State {
    switch (action.type) {

        case AddressActionTypes.FetchItems: {
            return {
                ...state,
                isLoading: true,
                error: null,
                selectedId: null,
                chooseId: null,
            };
        }

        case AddressActionTypes.FetchItemsSuccess: {
            return adapter.addAll(action.payload.itemIds, {
                ...state,
                isLoading: false,
                error: null,
                selectedId: null,
                chooseId: null,
            });
        }

        case AddressActionTypes.FetchItemsError: {
            return {
                ...state,
                isLoading: false,
                error: action.payload.error,
                selectedId: null,
                chooseId: null,
            };
        }

        case AddressActionTypes.AddItemSuccess: {
            return adapter.addOne(action.payload, {
                ...state,
                isLoading: false,
                error: null,
                selectedId: null,
                chooseId: action.payload.id,
            });
        }

        case AddressActionTypes.UpdateItemSuccess: {
            return adapter.updateOne(action.payload, {
                ...state,
                isLoading: false,
                error: null,
                selectedId: action.payload.changes.id,
                chooseId: null,
            });
        }

        case AddressActionTypes.RemoveItemSuccess: {
            return adapter.removeOne(action.payload, {
                ...state,
                isLoading: false,
                error: null,
                selectedId: null,
                chooseId: null,
            });
        }

        case AddressActionTypes.UpdateDefaultItemSuccess: {
            return adapter.updateMany(action.payload, {
                ...state,
            });
        }

        case AddressActionTypes.SelectAddress: {
            return {
                ...state,
                isLoading: false,
                error: null,
                selectedId: action.payload.id,
                chooseId: null,
            };
        }

        case AddressActionTypes.ChooseAddress: {
            return {
                ...state,
                isLoading: false,
                error: null,
                selectedId: null,
                chooseId: action.payload.id,
            };
        }

        default:
            return state;
    }
}

export const getIsLoading = (state: State) => state.isLoading;
export const getError = (state: State) => state.error;
export const getSelectedId = (state: State) => state.selectedId;
export const getChooseId = (state: State) => state.chooseId;
