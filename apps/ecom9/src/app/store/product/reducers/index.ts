import {
    ActionReducer,
    ActionReducerMap,
    createFeatureSelector,
    createSelector,
    MetaReducer
} from '@ngrx/store';
import * as fromRoot from '../../../store';
import * as fromProduct from './product.reducer';
import * as fromVariant from './variant.reducer';
import * as fromReview from './review.reducer';
import * as fromCategories from './category.reducer';
import * as fromMenus from './menu.reducer';
import * as fromSearch from './search.reducer';
import { Product, Category } from '@ecom9/models';

export interface State extends fromRoot.State {
    search: fromSearch.State;
    product: fromProduct.State;
    variant: fromVariant.State;
    reviews: fromReview.State;
    categories: fromCategories.State;
    menus: fromMenus.State;
}

export const reducers: ActionReducerMap<State> = {
    search: fromSearch.reducer,
    product: fromProduct.reducer,
    variant: fromVariant.reducer,
    reviews: fromReview.reducer,
    categories: fromCategories.reducer,
    menus: fromMenus.reducer,
};

export const getProductState = createFeatureSelector<State>('product');
export const getProductProductsState = createSelector(getProductState, state => state.product);

export const getSelectedProductId = createSelector(getProductProductsState, fromProduct.getSelectedId);

export const {
    selectEntities: getProductEntities,
    selectAll: getAllProducts,
    selectTotal: getTotalProducts,
} = fromProduct.adapter.getSelectors(getProductProductsState);

export const getSelectedProduct = createSelector(getProductEntities, getSelectedProductId, (entities, selectedId) => {
    return selectedId && entities[selectedId];
});

export const getRelatedProducts = createSelector(getProductEntities, getSelectedProduct, (entities, selectedProduct) => {
    if (selectedProduct) {
        const relatedIds = selectedProduct.related_ids;
        return relatedIds.map(id => entities[id]);
    } else {
        return [];
    }
});

// Variant
export const getVariantState = createSelector(getProductState, state => state.variant);

export const {
    selectEntities: getVariantEntities,
    selectAll: getAllVariants,
    selectTotal: getTotalVariants,
} = fromVariant.adapter.getSelectors(getVariantState);

export const getVariantProducts = createSelector(getVariantEntities, getSelectedProduct, (entities, selectedProduct) => {
    if (selectedProduct) {
        const variantIds = selectedProduct.variations;
        return variantIds.map(id => {
            return entities[id];
        });
    } else {
        return [];
    }
});

export const getProductIsLoading = createSelector(getProductProductsState, fromProduct.getIsLoading);
export const getProductError = createSelector(getProductProductsState, fromProduct.getError);

// Search
export const getSearchState = createSelector(getProductState, (state: State) => state.search);
export const getSeachProductIds = createSelector(getSearchState, fromSearch.getIds);
export const getSeachQuery = createSelector(getSearchState, fromSearch.getQuery);
export const getSearchLoading = createSelector(getSearchState, fromSearch.getLoading);
export const getSearchError = createSelector(getSearchState, fromSearch.getError);

export const getSearchResults = createSelector(
    getProductEntities,
    getSeachProductIds,
    (products, searchIds) => {
        return searchIds.map(id => products[id]);
    }
);

// Review
export const getReviewsState = createSelector(getProductState, (state: State) => state.reviews);

export const {
    selectEntities: getReviewEntities,
    selectAll: getAllReviews,
    selectTotal: getTotalReviews,
} = fromReview.adapter.getSelectors(getReviewsState);

export const getProductReviews = createSelector(getReviewEntities, getSelectedProductId, (entities, selectedId) => {
    const ids = [];
    if (selectedId) {
        for (const id in entities) {
            if (entities.hasOwnProperty(id)) {
                if (entities[id].product_id.toString() === selectedId.toString()) {
                    ids.push(entities[id]);
                }
            }
        }

        return ids;
    } else {
        return [];
    }
});
export const getReviewIsLoading = createSelector(getReviewsState, fromReview.getIsLoading);

// Categories
export const getCategoriesState = createSelector(getProductState, (state: State) => state.categories);

export const {
    selectEntities: getCategoriesEntities,
    selectAll: getAllCategories,
    selectTotal: getTotalCategories,
} = fromCategories.adapter.getSelectors(getCategoriesState);

export const getSelectedCategoryId = createSelector(getCategoriesState, fromCategories.getSelectedId);
export const getCategoriesIsLoading = createSelector(getCategoriesState, fromCategories.getIsLoading);
export const getCategoriesError = createSelector(getCategoriesState, fromCategories.getError);

export const getSelectedCategory = createSelector(getCategoriesEntities, getSelectedCategoryId, (entities, selectedId) => {
    if (selectedId >= 0) {
        return selectedId && entities[selectedId];
    }
});

export const getProductsByCategory = createSelector(getAllProducts, getSelectedCategory, (entities, selectedCategory) => {
    if (selectedCategory) {
        const products: Product[] = [];
        entities.filter(product => {
            product.categories.forEach((category: Category) => {
                if (category.id === selectedCategory.id) {
                    products.push(product);
                }
            });
        });
        return products;
    } else {
        return entities;
    }
});

// Menus
export const getMenusState = createSelector(getProductState, (state: State) => state.menus);

export const {
    selectEntities: getMenusEntities,
    selectAll: getAllMenus,
    selectTotal: getTotalMenus,
} = fromMenus.adapter.getSelectors(getMenusState);

export const getSelectedMenuId = createSelector(getMenusState, fromMenus.getSelectedId);
export const getMenusIsLoading = createSelector(getMenusState, fromMenus.getIsLoading);
export const getMenusError = createSelector(getMenusState, fromMenus.getError);

export const getSelectedMenu = createSelector(getMenusEntities, getSelectedMenuId, (entities, selectedId) => {
    if (selectedId >= 0) {
        return selectedId && entities[selectedId];
    }
});
