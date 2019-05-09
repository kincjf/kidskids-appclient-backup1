import { CartActions, CartActionTypes } from '../actions/cart.actions';

export interface State {
    cartItemsIds: { id: number, variant: number, price: number, images: any[], color: string }[];
}

export const initialState: State = {
    cartItemsIds: []
};

export function reducer(state = initialState, action: CartActions): State {
    switch (action.type) {

        case CartActionTypes.AddItem: {
            const newCartItemsIds = [...state.cartItemsIds, action.payload];
            return {
                cartItemsIds: newCartItemsIds,
            };
        }

        case CartActionTypes.AddItemError: {
            const indexOfItemId = state.cartItemsIds.indexOf(action.payload);
            state.cartItemsIds.splice(indexOfItemId, 1);
            const newCartItemsIds = [...state.cartItemsIds];

            return {
                cartItemsIds: newCartItemsIds,
            };
        }

        case CartActionTypes.RemoveItem: {
            const indexOfItemIds = [];

            for (let i = 0; i < state.cartItemsIds.length; i++) {
                if (action.payload.color) {
                    if (state.cartItemsIds[i].id === action.payload.id && state.cartItemsIds[i].color === action.payload.color) {
                        indexOfItemIds.push(i);
                    }
                } else {
                    if (state.cartItemsIds[i].id === action.payload.id) {
                        indexOfItemIds.push(i);
                    }
                }
            }

            for (let i = indexOfItemIds.length - 1; i >= 0; i--) {
                state.cartItemsIds.splice(indexOfItemIds[i], 1);
            }

            const newCartItemsIds = [...state.cartItemsIds];

            return {
                cartItemsIds: newCartItemsIds,
            };
        }

        case CartActionTypes.RemoveOne: {
            let indexOfItemId = -1;
            let newCartItemsIds = [];
            for (let i = 0; i < state.cartItemsIds.length; i++) {
                if (action.payload.color) {
                    if (state.cartItemsIds[i].id === action.payload.id && state.cartItemsIds[i].color === action.payload.color) {
                        indexOfItemId = i;
                    }
                } else {
                    if (state.cartItemsIds[i].id === action.payload.id) {
                        indexOfItemId = i;
                    }
                }
            }

            if (indexOfItemId >= 0) {
                state.cartItemsIds.splice(indexOfItemId, 1);
                newCartItemsIds = [...state.cartItemsIds];
            } else {
                newCartItemsIds = [...state.cartItemsIds];
            }

            return {
                cartItemsIds: newCartItemsIds,
            };
        }

        case CartActionTypes.RemoveItemError: {
            const newCartItemsIds = [...state.cartItemsIds, action.payload];
            return {
                cartItemsIds: newCartItemsIds
            };
        }

        case CartActionTypes.FetchItemsSuccess: {
            return {
                cartItemsIds: action.payload.itemIds,
            };
        }

        case CartActionTypes.RemoveAllItems: {
            return {
                cartItemsIds: []
            };
        }

        case CartActionTypes.RemoveAllItemsError: {
            return {
                cartItemsIds: action.payload.itemIds
            };
        }

        default:
            return state;
    }
}

export const getItemsIds = (state: State) => state.cartItemsIds;
