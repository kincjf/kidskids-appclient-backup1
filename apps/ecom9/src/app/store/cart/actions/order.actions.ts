import { Action } from '@ngrx/store';
import { Order } from '@ecom9/models';
import { Update } from '@ngrx/entity';

export enum OrderActionTypes {
    AddOrder = '[Order] Add Order',
    AddOrderSuccess = '[Order] Add Order Success',
    AddOrderError = '[Order] Add Order Error',

    UpdateOrder = '[Order] Update Order',
    UpdateOrderSuccess = '[Order] Update Order Success',
    UpdateOrderError = '[Order] Update Order Error',

    RemoveOrder = '[Order] Remove Order',
    RemoveOrderSuccess = '[Order] Remove Order Success',
    RemoveOrderError = '[Order] Remove Order Error',

    FetchOrders = '[Order] Fetch Orders',
    FetchOrdersSuccess = '[Order] Fetch Orders Success',
    FetchOrdersError = '[Order] Fetch Orders Error',

    SelectOrder = '[Shop] Select Order',
}

export class AddOrder implements Action {
    readonly type = OrderActionTypes.AddOrder;
    constructor(public payload: Order) { }
}

export class AddOrderSuccess implements Action {
    readonly type = OrderActionTypes.AddOrderSuccess;
    constructor(public payload: Order) {
    }
}

export class AddOrderError implements Action {
    readonly type = OrderActionTypes.AddOrderError;
    constructor(public payload: { error: any }) { }
}

export class FetchOrders implements Action {
    readonly type = OrderActionTypes.FetchOrders;
    constructor(public payload: number) { }
}

export class FetchOrdersSuccess implements Action {
    readonly type = OrderActionTypes.FetchOrdersSuccess;
    constructor(public payload: { itemIds: Order[] }) { }
}

export class FetchOrdersError implements Action {
    readonly type = OrderActionTypes.FetchOrdersError;
    constructor(public payload: { error: string }) { }
}

export class SelectOrder implements Action {
    readonly type = OrderActionTypes.SelectOrder;
    constructor(public readonly payload: { id: string }) { }
}

export type OrderActions = AddOrder
    | AddOrderSuccess
    | AddOrderError
    | FetchOrders
    | FetchOrdersError
    | FetchOrdersSuccess
    | SelectOrder;
