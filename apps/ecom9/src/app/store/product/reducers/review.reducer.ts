import { createEntityAdapter, EntityState, EntityAdapter } from '@ngrx/entity';
import { ReviewActions, ReviewActionTypes } from '../actions/review.actions';
import { ProductReview } from '@ecom9/models';


export interface State extends EntityState<ProductReview> {
    isLoading: boolean;
    error: any;
}

export const adapter: EntityAdapter<ProductReview> = createEntityAdapter({
    selectId: (review: ProductReview) => review.id,
});

export const initialState: State = adapter.getInitialState({
    isLoading: true,
    error: null,
});

export function reducer(state = initialState, action: ReviewActions): State {
    switch (action.type) {

        case ReviewActionTypes.LoadProductReviews: {
            return {
                ...state,
                isLoading: true,
                error: null,
            };
        }

        case ReviewActionTypes.LoadProductReviewsSuccess: {
            return adapter.addAll(action.payload.items, {
                ...state,
                isLoading: false,
                error: null,
            });
        }

        case ReviewActionTypes.LoadProductReviewsError: {
            return {
                ...state,
                isLoading: false,
                error: action.payload.error
            };
        }

        case ReviewActionTypes.AddReviewSuccess: {
            return adapter.addOne(action.payload, {
                ...state,
            });
        }

        default:
            return state;
    }
}

export const getIsLoading = (state: State) => state.isLoading;
export const getError = (state: State) => state.error;
