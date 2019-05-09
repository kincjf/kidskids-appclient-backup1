import { Action } from '@ngrx/store';
import { Address } from '@ecom9/models';
import { Update } from '@ngrx/entity';

export enum AddressActionTypes {
    AddItem = '[Address] Add Item',
    AddItemSuccess = '[Address] Add Item Success',
    AddItemError = '[Address] Add Item Error',

    UpdateItem = '[Address] Update Item',
    UpdateItemSuccess = '[Address] Update Item Success',
    UpdateItemError = '[Address] Update Item Error',

    RemoveItem = '[Address] Remove Item',
    RemoveItemSuccess = '[Address] Remove Item Success',
    RemoveItemError = '[Address] Remove Item Error',

    FetchItems = '[Address] Fetch Items',
    FetchItemsSuccess = '[Address] Fetch Items Success',
    FetchItemsError = '[Address] Fetch Items Error',

    RemoveAllItems = '[Address] Remove All Items',
    RemoveAllItemsSuccess = '[Address] Remove All Items Success',
    RemoveAllItemsError = '[Address] Remove All Items Error',

    SelectAddress = '[Shop] Select Address',
    ChooseAddress = '[Shop] Choose Address',

    UpdateDefaultItem = '[Address] Update Default Item',
    UpdateDefaultItemSuccess = '[Address] Update Default Item Success',
    UpdateDefaultItemError = '[Address] Update Default Item Error',
}

export class AddItem implements Action {
    readonly type = AddressActionTypes.AddItem;
    constructor(public payload: Address) { }
}

export class AddItemSuccess implements Action {
    readonly type = AddressActionTypes.AddItemSuccess;
    constructor(public payload: Address) { }
}

export class AddItemError implements Action {
    readonly type = AddressActionTypes.AddItemError;
    constructor(public payload: Address) { }
}

export class UpdateItem implements Action {
    readonly type = AddressActionTypes.UpdateItem;
    constructor(public payload: Address) { }
}

export class UpdateItemSuccess implements Action {
    readonly type = AddressActionTypes.UpdateItemSuccess;
    constructor(public payload: Update<Address>) { }
}

export class UpdateItemError implements Action {
    readonly type = AddressActionTypes.UpdateItemError;
    constructor(public payload: Address) { }
}

export class RemoveItem implements Action {
    readonly type = AddressActionTypes.RemoveItem;
    constructor(public payload: string) { }
}

export class RemoveItemSuccess implements Action {
    readonly type = AddressActionTypes.RemoveItemSuccess;
    constructor(public payload: string) { }
}

export class RemoveItemError implements Action {
    readonly type = AddressActionTypes.RemoveItemError;
    constructor(public payload: string) { }
}

export class FetchItems implements Action {
    readonly type = AddressActionTypes.FetchItems;
}

export class FetchItemsSuccess implements Action {
    readonly type = AddressActionTypes.FetchItemsSuccess;
    constructor(public payload: { itemIds: Address[] }) { }
}

export class FetchItemsError implements Action {
    readonly type = AddressActionTypes.FetchItemsError;
    constructor(public payload: { error: string }) { }
}

export class RemoveAllItems implements Action {
    readonly type = AddressActionTypes.RemoveAllItems;
}

export class RemoveAllItemsSuccess implements Action {
    readonly type = AddressActionTypes.RemoveAllItemsSuccess;
}

export class RemoveAllItemsError implements Action {
    readonly type = AddressActionTypes.RemoveAllItemsError;
    constructor(public payload: { itemIds: Address[] }) { }
}

export class SelectAddress implements Action {
    readonly type = AddressActionTypes.SelectAddress;
    constructor(public readonly payload: { id: string }) { }
}

export class ChooseAddress implements Action {
    readonly type = AddressActionTypes.ChooseAddress;
    constructor(public readonly payload: { id: string }) { }
}

export class UpdateDefaultItem implements Action {
    readonly type = AddressActionTypes.UpdateDefaultItem;
    constructor(public payload: Address) { }
}

export class UpdateDefaultItemSuccess implements Action {
    readonly type = AddressActionTypes.UpdateDefaultItemSuccess;
    constructor(public payload: Update<Address>[]) { }
}

export class UpdateDefaultItemError implements Action {
    readonly type = AddressActionTypes.UpdateDefaultItemError;
    constructor(public payload: Address) { }
}

export type AddressActions = AddItem
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
    | RemoveAllItemsSuccess
    | SelectAddress
    | UpdateItem
    | UpdateItemSuccess
    | UpdateItemError
    | UpdateDefaultItem
    | UpdateDefaultItemSuccess
    | UpdateDefaultItemError
    | ChooseAddress;
