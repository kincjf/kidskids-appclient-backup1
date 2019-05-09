import { createEntityAdapter, EntityState, EntityAdapter } from '@ngrx/entity';
import { Action } from '@ngrx/store';
import { ProductActions, ProductActionTypes } from '../actions/product.actions';
import { Product } from '@ecom9/models';

export interface State extends EntityState<Product> {
  isLoading: boolean;
  error: any;
  selectedId: number;
}

export const adapter: EntityAdapter<Product> = createEntityAdapter({
  selectId: (product: Product) => product.id,
});

export const initialState: State = adapter.getInitialState({
  isLoading: true,
  error: null,
  selectedId: null,
});

export function reducer(state = initialState, action: ProductActions): State {
  switch (action.type) {

    case ProductActionTypes.LoadProducts: {
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    }

    case ProductActionTypes.LoadProductsSuccess: {
      return adapter.addAll(action.payload.items, {
        ...state,
        isLoading: false,
        isLoadingMore: false,
        error: null,
      });
    }

    case ProductActionTypes.LoadProductsError: {
      return {
        ...state,
        isLoading: false,
        error: action.payload.error,
      };
    }

    case ProductActionTypes.SelectProduct: {
      return {
        ...state,
        isLoading: false,
        error: null,
        selectedId: action.payload.id,
      };
    }

    case ProductActionTypes.Search: {
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    }

    case ProductActionTypes.SearchComplete: {
      return {
        ...state,
        isLoading: false,
        error: null,
      };
    }

    default:
      return state;
  }
}

export const getIsLoading = (state: State) => state.isLoading;
export const getError = (state: State) => state.error;
export const getSelectedId = (state: State) => state.selectedId;

