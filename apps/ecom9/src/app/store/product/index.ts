import * as productActions from './actions/product.actions';
import * as variantActions from './actions/variant.actions';
import * as reviewActions from './actions/review.actions';
import * as categoryActions from './actions/category.actions';

import * as productSelectors from './reducers/product.reducer';
import * as variantSelectors from './reducers/variant.reducer';
import * as searchSelectors from './reducers/search.reducer';
import * as reviewSelectors from './reducers/review.reducer';
import * as categorySelectors from './reducers/category.reducer';

import * as productState from './reducers';

export {
    productState,
    searchSelectors,
    productActions, productSelectors,
    variantActions, variantSelectors,
    reviewSelectors, reviewActions,
    categorySelectors, categoryActions,
};

export { ProductModule } from './product.module';
