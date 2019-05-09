import { createEntityAdapter, EntityState, EntityAdapter } from '@ngrx/entity';
import { VariantActions, VariantActionTypes } from '../actions/variant.actions';
import { ProductVariant } from '@ecom9/models';

export interface State extends EntityState<ProductVariant> {
    isLoading: boolean;
    error: any;
}

export const adapter: EntityAdapter<ProductVariant> = createEntityAdapter({
    selectId: (product: ProductVariant) => product.id,
});

export const initialState: State = adapter.getInitialState({
    isLoading: true,
    error: null,
    selectedId: null,
});

export function reducer(state = initialState, action: VariantActions): State {
    switch (action.type) {

        case VariantActionTypes.LoadVariants: {
            return {
                ...state,
                isLoading: true,
                error: null,
            };
        }

        case VariantActionTypes.LoadVariantsSuccess: {
            return adapter.addMany(action.payload.items, {
                ...state,
                isLoading: false,
                isLoadingMore: false,
                error: null,
            });
        }

        case VariantActionTypes.LoadVariantsError: {
            return {
                ...state,
                isLoading: false,
                error: action.payload.error,
            };
        }

        default:
            return state;
    }
}

export const getIsLoading = (state: State) => state.isLoading;
export const getError = (state: State) => state.error;

