import { Action } from '@ngrx/store';

export enum WishlistActionTypes {
    AddItem = '[Wishlist] Add Item',
    AddItemSuccess = '[Wishlist] Add Item Success',
    AddItemError = '[Wishlist] Add Item Error',

    RemoveItem = '[Wishlist] Remove Item',
    RemoveItemSuccess = '[Wishlist] Remove Item Success',
    RemoveItemError = '[Wishlist] Remove Item Error',

    FetchItems = '[Wishlist] Fetch Items',
    FetchItemsSuccess = '[Wishlist] Fetch Items Success',
    FetchItemsError = '[Wishlist] Fetch Items Error',

    RemoveAllItems = '[Wishlist] Remove All Items',
    RemoveAllItemsSuccess = '[Wishlist] Remove All Items Success',
    RemoveAllItemsError = '[Wishlist] Remove All Items Error',
}

export class AddItem implements Action {
    readonly type = WishlistActionTypes.AddItem;
    constructor(public payload: { id: number, color: string }) { }
}

export class AddItemSuccess implements Action {
    readonly type = WishlistActionTypes.AddItemSuccess;
}

export class AddItemError implements Action {
    readonly type = WishlistActionTypes.AddItemError;
    constructor(public payload: { id: number, color: string }) { }
}

export class RemoveItem implements Action {
    readonly type = WishlistActionTypes.RemoveItem;
    constructor(public payload: { id: number, color: string }) { }
}

export class RemoveItemSuccess implements Action {
    readonly type = WishlistActionTypes.RemoveItemSuccess;
}

export class RemoveItemError implements Action {
    readonly type = WishlistActionTypes.RemoveItemError;
    constructor(public payload: { id: number, color: string }) { }
}

export class FetchItems implements Action {
    readonly type = WishlistActionTypes.FetchItems;
}

export class FetchItemsSuccess implements Action {
    readonly type = WishlistActionTypes.FetchItemsSuccess;
    constructor(public payload: { itemIds: { id: number, color: string }[] }) { }
}

export class FetchItemsError implements Action {
    readonly type = WishlistActionTypes.FetchItemsError;
    constructor(public payload: { error: string }) { }
}

export class RemoveAllItems implements Action {
    readonly type = WishlistActionTypes.RemoveAllItems;
}

export class RemoveAllItemsSuccess implements Action {
    readonly type = WishlistActionTypes.RemoveAllItemsSuccess;
}

export class RemoveAllItemsError implements Action {
    readonly type = WishlistActionTypes.RemoveAllItemsError;
    constructor(public payload: { itemIds: { id: number, color: string }[] }) { }
}

export type WishlistActions = AddItem
    | AddItemSuccess
    | AddItemError
    | RemoveItem
    | RemoveItemError
    | RemoveItemSuccess
    | FetchItems
    | FetchItemsError
    | FetchItemsSuccess
    | RemoveAllItems
    | RemoveAllItemsError
    | RemoveAllItemsSuccess;
