import { Action } from '@ngrx/store';
import { ProductReview } from '@ecom9/models';


export enum ReviewActionTypes {
    LoadProductReviews = '[Shop] Load Product Reviews',
    LoadProductReviewsSuccess = '[Shop] Load Product Reviews Success',
    LoadProductReviewsError = '[Shop] Load Product Reviews Error',

    AddReview = '[Shop] Add Product Review',
    AddReviewSuccess = '[Shop] Add Product Review Success',
    AddReviewError = '[Shop] Add Product Review Error',
}

export class LoadProductReviews implements Action {
    readonly type = ReviewActionTypes.LoadProductReviews;
    constructor(public readonly payload: { product_id: number }) {
    }
}

export class LoadProductReviewsSuccess implements Action {
    readonly type = ReviewActionTypes.LoadProductReviewsSuccess;
    constructor(public readonly payload: { items: ProductReview[] }) {
    }
}

export class LoadProductReviewsError implements Action {
    readonly type = ReviewActionTypes.LoadProductReviewsError;
    constructor(public readonly payload: { error: string }) { }
}

export class AddReview implements Action {
    readonly type = ReviewActionTypes.AddReview;
    constructor(public readonly payload: {
        product_id: number,
        review: string,
        reviewer: string,
        reviewer_email: string,
        rating: number
    }) { }
}

export class AddReviewSuccess implements Action {
    readonly type = ReviewActionTypes.AddReviewSuccess;
    constructor(public readonly payload: ProductReview) { }
}

export class AddReviewError implements Action {
    readonly type = ReviewActionTypes.AddReviewError;
    constructor(public readonly payload: { error: string }) { }
}

export type ReviewActions = LoadProductReviews
    | LoadProductReviewsError
    | LoadProductReviewsSuccess
    | AddReview
    | AddReviewError
    | AddReviewSuccess;
