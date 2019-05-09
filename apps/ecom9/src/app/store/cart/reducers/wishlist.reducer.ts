import { WishlistActions, WishlistActionTypes } from '../actions/wishlist.actions';

export interface State {
    cartItemsIds: { id: number, color: string }[];
    isLoading: boolean;
    error: any;
}

export const initialState: State = {
    cartItemsIds: [],
    isLoading: false,
    error: null
};

export function reducer(state = initialState, action: WishlistActions): State {
    switch (action.type) {

        case WishlistActionTypes.AddItem: {
            const newCartItemsIds = [...state.cartItemsIds, action.payload];
            return {
                cartItemsIds: newCartItemsIds,
                isLoading: false,
                error: null
            };
        }

        case WishlistActionTypes.AddItemError: {
            const indexOfItemId = state.cartItemsIds.indexOf(action.payload);
            state.cartItemsIds.splice(indexOfItemId, 1);
            const newCartItemsIds = [...state.cartItemsIds];

            return {
                cartItemsIds: newCartItemsIds,
                isLoading: false,
                error: null
            };
        }

        case WishlistActionTypes.RemoveItem: {
            const indexOfItemIds = [];

            for (let i = 0; i < state.cartItemsIds.length; i++) {
                if (state.cartItemsIds[i].id === action.payload.id && state.cartItemsIds[i].color === action.payload.color) {
                    indexOfItemIds.push(i);
                }
            }

            for (let i = indexOfItemIds.length - 1; i >= 0; i--) {
                state.cartItemsIds.splice(indexOfItemIds[i], 1);
            }

            const newCartItemsIds = [...state.cartItemsIds];

            return {
                cartItemsIds: newCartItemsIds,
                isLoading: false,
                error: null
            };
        }

        case WishlistActionTypes.RemoveItemError: {
            const newCartItemsIds = [...state.cartItemsIds, action.payload];
            return {
                cartItemsIds: newCartItemsIds,
                isLoading: false,
                error: null
            };
        }

        case WishlistActionTypes.FetchItems: {
            return {
                ...state,
                isLoading: true,
                error: null
            };
        }

        case WishlistActionTypes.FetchItemsSuccess: {
            return {
                cartItemsIds: action.payload.itemIds,
                isLoading: false,
                error: null
            };
        }

        case WishlistActionTypes.RemoveAllItems: {
            return {
                cartItemsIds: [],
                isLoading: false,
                error: null
            };
        }

        case WishlistActionTypes.RemoveAllItemsError: {
            return {
                cartItemsIds: action.payload.itemIds,
                isLoading: false,
                error: null
            };
        }

        default:
            return state;
    }
}

export const getIsLoading = (state: State) => state.isLoading;
export const getError = (state: State) => state.error;
export const getItemsIds = (state: State) => state.cartItemsIds;
