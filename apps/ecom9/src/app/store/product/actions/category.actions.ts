import { Action } from '@ngrx/store';
import { Category, XMenu } from '@ecom9/models';

export enum CategoryActionTypes {
    LoadCategories = '[Shop] Load  Categories',
    LoadCategoriesSuccess = '[Shop] Load  Categories Success',
    LoadCategoriesError = '[Shop] Load  Categories Error',

    SelectCategory = '[Shop] Select Category',
}

export class LoadCategories implements Action {
    readonly type = CategoryActionTypes.LoadCategories;
}

export class LoadCategoriesSuccess implements Action {
    readonly type = CategoryActionTypes.LoadCategoriesSuccess;
    constructor(public readonly payload: { items: Category[] }) { }
}

export class LoadCategoriesError implements Action {
    readonly type = CategoryActionTypes.LoadCategoriesError;
    constructor(public readonly payload: { error: string }) { }
}

export class SelectCategory implements Action {
    readonly type = CategoryActionTypes.SelectCategory;
    constructor(public readonly payload: { id: number }) {
    }
}

export type CategoryActions = LoadCategories
    | LoadCategoriesError
    | LoadCategoriesSuccess
    | SelectCategory;
