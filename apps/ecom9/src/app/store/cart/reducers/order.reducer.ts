import { createEntityAdapter, EntityState, EntityAdapter } from '@ngrx/entity';
import { OrderActions, OrderActionTypes } from '../actions/order.actions';
import { Order } from '@ecom9/models';

export interface State extends EntityState<Order> {
    isLoading: boolean;
    error: any;
    selectedId: string;
    processingOrder: boolean;
}

export const adapter: EntityAdapter<Order> = createEntityAdapter({
    selectId: (address: Order) => address.id,
});

export const initialState: State = adapter.getInitialState({
    isLoading: true,
    error: null,
    selectedId: null,
    processingOrder: false,
});

export function reducer(state = initialState, action: OrderActions): State {
    switch (action.type) {

        case OrderActionTypes.FetchOrders: {
            return {
                ...state,
                isLoading: true,
                error: null,
            };
        }

        case OrderActionTypes.FetchOrdersSuccess: {
            return adapter.addAll(action.payload.itemIds, {
                ...state,
                isLoading: false,
                error: null,
            });
        }

        case OrderActionTypes.FetchOrdersError: {
            return {
                ...state,
                isLoading: false,
                error: action.payload.error,
            };
        }

        case OrderActionTypes.AddOrder: {
            return {
                ...state,
                processingOrder: true
            };
        }

        case OrderActionTypes.AddOrderSuccess: {
            return adapter.addOne(action.payload, {
                ...state,
                processingOrder: false
            });
        }

        case OrderActionTypes.AddOrderError: {
            return {
                ...state,
                error: action.payload.error
            };
        }

        case OrderActionTypes.SelectOrder: {
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
export const getProcessingOrder = (state: State) => state.processingOrder;