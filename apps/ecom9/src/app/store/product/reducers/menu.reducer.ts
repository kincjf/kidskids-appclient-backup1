import { createEntityAdapter, EntityState, EntityAdapter } from '@ngrx/entity';
import { Action } from '@ngrx/store';
import { XMenuActions, XMenuActionTypes } from '../actions/menu.actions';
import { XMenu } from '@ecom9/models';

export interface State extends EntityState<XMenu> {
  isLoading: boolean;
  error: any;
  selectedId: number;
}

export const adapter: EntityAdapter<XMenu> = createEntityAdapter({
  selectId: (menu: XMenu) => menu.id
});

export const initialState: State = adapter.getInitialState({
  isLoading: true,
  error: null,
  selectedId: -1
});

export function reducer(state = initialState, action: XMenuActions): State {
  switch (action.type) {
    case XMenuActionTypes.LoadMenus: {
      return {
        ...state,
        isLoading: true,
        error: null,
        selectedId: -1
      };
    }

    case XMenuActionTypes.LoadMenusSuccess: {
      return adapter.addAll(action.payload.items, {
        ...state,
        isLoading: false,
        error: null,
        selectedId: -1
      });
    }

    case XMenuActionTypes.LoadMenusError: {
      return {
        ...state,
        isLoading: false,
        error: action.payload.error,
        selectedId: null
      };
    }

    case XMenuActionTypes.SelectXMenu: {
      return {
        ...state,
        isLoading: false,
        error: null,
        selectedId: action.payload.id
      };
    }

    default:
      return state;
  }
}

export const getIsLoading = (state: State) => state.isLoading;
export const getError = (state: State) => state.error;
export const getSelectedId = (state: State) => state.selectedId;
