import { Action } from '@ngrx/store';

export enum CartActionTypes {
    AddItem = '[Cart] Add Item',
    AddItemSuccess = '[Cart] Add Item Success',
    AddItemError = '[Cart] Add Item Error',

    RemoveItem = '[Cart] Remove Item',
    RemoveItemSuccess = '[Cart] Remove Item Success',
    RemoveItemError = '[Cart] Remove Item Error',

    RemoveOne = '[Cart] Remove One',
    RemoveOneSuccess = '[Cart] Remove One Success',
    RemoveOneError = '[Cart] Remove One Error',

    FetchItems = '[Cart] Fetch Items',
    FetchItemsSuccess = '[Cart] Fetch Items Success',
    FetchItemsError = '[Cart] Fetch Items Error',

    PurchaseItems = '[Cart] Purchase Items',
    PurchaseItemsSuccess = '[Cart] Purchase Items Success',
    PurchaseItemsError = '[Cart] Purchase Items Error',

    RemoveAllItems = '[Cart] Remove All Items',
    RemoveAllItemsSuccess = '[Cart] Remove All Items Success',
    RemoveAllItemsError = '[Cart] Remove All Items Error',
}

export class AddItem implements Action {
    readonly type = CartActionTypes.AddItem;
    constructor(public payload: { id: number, variant: number, price: number, images: any[], color: string }) { }
}

export class AddItemSuccess implements Action {
    readonly type = CartActionTypes.AddItemSuccess;
}

export class AddItemError implements Action {
    readonly type = CartActionTypes.AddItemError;
    constructor(public payload: { id: number, variant: number, price: number, images: any[], color: string }) { }
}

export class RemoveItem implements Action {
    readonly type = CartActionTypes.RemoveItem;
    constructor(public payload: { id: number, variant: number, price: number, images: any[], color: string }) { }
}

export class RemoveItemSuccess implements Action {
    readonly type = CartActionTypes.RemoveItemSuccess;
}

export class RemoveItemError implements Action {
    readonly type = CartActionTypes.RemoveItemError;
    constructor(public payload: { id: number, variant: number, price: number, images: any[], color: string }) { }
}

export class RemoveOne implements Action {
    readonly type = CartActionTypes.RemoveOne;
    constructor(public payload: { id: number, variant: number, price: number, images: any[], color: string }) { }
}

export class RemoveOneSuccess implements Action {
    readonly type = CartActionTypes.RemoveOneSuccess;
}

export class RemoveOneError implements Action {
    readonly type = CartActionTypes.RemoveOneError;
    constructor(public payload: { id: number, variant: number, price: number, images: any[], color: string }) { }
}

export class FetchItems implements Action {
    readonly type = CartActionTypes.FetchItems;
}

export class FetchItemsSuccess implements Action {
    readonly type = CartActionTypes.FetchItemsSuccess;
    constructor(public payload: { itemIds: { id: number, variant: number, price: number, images: any[], color: string }[] }) { }
}

export class FetchItemsError implements Action {
    readonly type = CartActionTypes.FetchItemsError;
    constructor(public payload: { error: string }) { }
}

export class PurchaseItems implements Action {
    readonly type = CartActionTypes.PurchaseItems;
    constructor(public payload: { id: number, color: string, price: number, images: any[], quantity: number }[]) { }
}

export class PurchaseItemsSuccess implements Action {
    readonly type = CartActionTypes.PurchaseItemsSuccess;
}

export class PurchaseItemsError implements Action {
    readonly type = CartActionTypes.PurchaseItemsError;
    constructor(public payload: { error: string }) { }
}

export class RemoveAllItems implements Action {
    readonly type = CartActionTypes.RemoveAllItems;
}

export class RemoveAllItemsSuccess implements Action {
    readonly type = CartActionTypes.RemoveAllItemsSuccess;
}

export class RemoveAllItemsError implements Action {
    readonly type = CartActionTypes.RemoveAllItemsError;
    constructor(public payload: { itemIds: { id: number, variant: number, price: number, images: any[], color: string }[] }) { }
}

export type CartActions = AddItem
    | AddItemSuccess
    | AddItemError
    | RemoveItem
    | RemoveItemError
    | RemoveItemSuccess
    | FetchItems
    | FetchItemsError
    | FetchItemsSuccess
    | PurchaseItems
    | PurchaseItemsError
    | PurchaseItemsSuccess
    | RemoveAllItems
    | RemoveAllItemsError
    | RemoveAllItemsSuccess
    | RemoveOne
    | RemoveOneSuccess
    | RemoveOneError;
