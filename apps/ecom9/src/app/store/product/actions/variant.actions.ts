import { Action } from '@ngrx/store';
import { ProductVariant } from '@ecom9/models';

export enum VariantActionTypes {
    LoadVariants = '[Product] Load Variants',
    LoadVariantsSuccess = '[Product] Load Variants Success',
    LoadVariantsError = '[Product] Load Variants Error',
}

export class LoadVariants implements Action {
    readonly type = VariantActionTypes.LoadVariants;
    constructor(public readonly payload: { product_id: number }) { }
}

export class LoadVariantsSuccess implements Action {
    readonly type = VariantActionTypes.LoadVariantsSuccess;
    constructor(public readonly payload: { items: ProductVariant[] }) { }
}

export class LoadVariantsError implements Action {
    readonly type = VariantActionTypes.LoadVariantsError;
    constructor(public readonly payload: { error: string }) { }
}

export type VariantActions = LoadVariants
    | LoadVariantsSuccess
    | LoadVariantsError;
