import { Action } from '@ngrx/store';
import { Product, ProductVariant } from '@ecom9/models';

export enum ProductActionTypes {
    LoadProducts = '[Product] Load Products',
    LoadProductsSuccess = '[Product] Load Products Success',
    LoadProductsError = '[Product] Load Products Error',

    Search = '[Product] Search Product',
    SearchComplete = '[Product] Search Product Complete',
    SearchError = '[Product] Search Product Error',

    SelectProduct = '[Product] Select Product Product',
}

export class LoadProducts implements Action {
    readonly type = ProductActionTypes.LoadProducts;
}

export class LoadProductsSuccess implements Action {
    readonly type = ProductActionTypes.LoadProductsSuccess;
    constructor(public readonly payload: { items: Product[] }) { }
}

export class LoadProductsError implements Action {
    readonly type = ProductActionTypes.LoadProductsError;
    constructor(public readonly payload: { error: string }) { }
}

export class SelectProduct implements Action {
    readonly type = ProductActionTypes.SelectProduct;
    constructor(public readonly payload: { id: number }) {
    }
}

export class Search implements Action {
    readonly type = ProductActionTypes.Search;
    constructor(public readonly payload: { query: string }) {
    }
}

export class SearchComplete implements Action {
    readonly type = ProductActionTypes.SearchComplete;
    constructor(public readonly payload: { items: Product[] }) { }
}

export class SearchError implements Action {
    readonly type = ProductActionTypes.SearchError;
    constructor(public readonly payload: { error: string }) { }
}

export type ProductActions =
    LoadProducts
    | LoadProductsSuccess
    | LoadProductsError
    | SelectProduct
    | Search
    | SearchComplete
    | SearchError;
