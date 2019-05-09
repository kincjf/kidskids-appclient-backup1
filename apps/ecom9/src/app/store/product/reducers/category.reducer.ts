import { createEntityAdapter, EntityState, EntityAdapter } from '@ngrx/entity';
import { Action } from '@ngrx/store';
import { CategoryActions, CategoryActionTypes } from '../actions/category.actions';
import { Category } from '@ecom9/models';

export interface State extends EntityState<Category> {
  isLoading: boolean;
  error: any;
  selectedId: number;
}

export const adapter: EntityAdapter<Category> = createEntityAdapter({
  selectId: (category: Category) => category.id,
});

export const initialState: State = adapter.getInitialState({
  isLoading: true,
  error: null,
  selectedId: -1,
});

export function reducer(state = initialState, action: CategoryActions): State {
  switch (action.type) {

    case CategoryActionTypes.LoadCategories: {
      return {
        ...state,
        isLoading: true,
        error: null,
        selectedId: -1,
      };
    }

    case CategoryActionTypes.LoadCategoriesSuccess: {
      return adapter.addAll(action.payload.items, {
        ...state,
        isLoading: false,
        error: null,
        selectedId: -1,
      });
    }

    case CategoryActionTypes.LoadCategoriesError: {
      return {
        ...state,
        isLoading: false,
        error: action.payload.error,
        selectedId: null,
      };
    }

    case CategoryActionTypes.SelectCategory: {
      return {
        ...state,
        isLoading: false,
        error: null,
        selectedId: action.payload.id,
      };
    }

    default:
      return state;
  }
}

export const getIsLoading = (state: State) => state.isLoading;
export const getError = (state: State) => state.error;
export const getSelectedId = (state: State) => state.selectedId;

