import {
    ActionReducerMap,
    createFeatureSelector,
    createSelector
} from '@ngrx/store';
import * as fromCart from './cart.reducer';
import * as fromAddress from './address.reducer';
import * as fromWishlist from './wishlist.reducer';
import * as fromOrder from './order.reducer';
import * as fromCountry from './country.reducer';
import * as fromCurrency from './currency.reducer';
import * as fromProduct from '../../product';


import * as fromRoot from '../..';
import { Product, CartProduct, WishlistItem } from '@ecom9/models';

export interface State {
    cart: fromCart.State;
    addresses: fromAddress.State;
    wishlist: fromWishlist.State;
    order: fromOrder.State;
    countries: fromCountry.State;
    currency: fromCurrency.State;
}

export const reducers: ActionReducerMap<State> = {
    cart: fromCart.reducer,
    addresses: fromAddress.reducer,
    wishlist: fromWishlist.reducer,
    order: fromOrder.reducer,
    countries: fromCountry.reducer,
    currency: fromCurrency.reducer,
};

export const getCartFeatureState = createFeatureSelector<State>('cart');

export const getCartState = createSelector(getCartFeatureState, getCartFeatureState, state => state.cart);

export const getCartItemsIds = createSelector(getCartState, fromCart.getItemsIds);
export const getCartItemsCount = createSelector(getCartItemsIds, state => state.length);

export const getCartProducts = createSelector<
    fromCart.State & fromRoot.State,
    { id: number, variant: number, price: number, images: any[], color: string }[],
    Product[],
    CartProduct[]
>(getCartItemsIds, fromProduct.productState.getAllProducts, (ids, products) => {
    if (ids.length === 0 || products.length === 0) {
        return [];
    }

    const idsMap = ids.reduce((acc, id) => {
        if (acc[`${id.id}_${id.variant}`]) {
            const currentQuantity = acc[`${id.id}_${id.variant}`].quantity;
            acc[`${id.id}_${id.variant}`] = { variant: id.variant, price: id.price, quantity: currentQuantity + 1, images: id.images, color: id.color };
            return acc;
        } else {
            const currentQuantity = 0;
            acc[`${id.id}_${id.variant}`] = { variant: id.variant, price: id.price, quantity: currentQuantity + 1, images: id.images, color: id.color };
            return acc;
        }
    }, {});

    const result = Object.keys(idsMap).map((id) => {
        return ({
            ...products.find(p => p.id === parseInt(id.split('_')[0], 10)),
            price: idsMap[id].price,
            images: idsMap[id].images,
            quantity: idsMap[id].quantity,
            variant: idsMap[id].variant,
            color: idsMap[id].color,
        });
    });

    return result;
});

export const getCartTotal = createSelector(getCartProducts, cartProducts => {
    return cartProducts.reduce(
        (acc, product) => acc + parseFloat(product.price.toString()) * parseInt(product.quantity.toString(), 10),
        0
    );
});

// Address
export const getAddressesState = createSelector(getCartFeatureState, state => state.addresses);

export const getSelectedAddressId = createSelector(getAddressesState, fromAddress.getSelectedId);
export const getChoosedAddressId = createSelector(getAddressesState, fromAddress.getChooseId);

export const {
    selectEntities: getAddressEntities,
    selectAll: getAllAddresses,
    selectTotal: getTotalAddresses,
} = fromAddress.adapter.getSelectors(getAddressesState);

export const getSelectedAddress = createSelector(getAddressEntities, getSelectedAddressId, (entities, selectedId) => {
    return selectedId && entities[selectedId];
});

export const getChoosedAddress = createSelector(getAddressEntities, getChoosedAddressId, getAllAddresses, (entities, selectedId, allAddress) => {
    if (selectedId) {
        return entities[selectedId];
    } else {
        const defaultAddress = allAddress.find(address => address.default);
        return defaultAddress ? defaultAddress : allAddress[0];
    }
});

export const getDefaultAddress = createSelector(getAllAddresses, (allAddress) => {
    const defaultAddress = allAddress.find(address => address.default);
    return defaultAddress ? defaultAddress : allAddress[0];
});

export const getAddressIsLoading = createSelector(getAddressesState, fromAddress.getIsLoading);
export const getAddressError = createSelector(getAddressesState, fromAddress.getError);

// Wishlist
export const getWishlistState = createSelector(getCartFeatureState, state => state.wishlist);

export const getWishlistIsLoading = createSelector(getWishlistState, fromWishlist.getIsLoading);
export const getWishlistError = createSelector(getWishlistState, fromWishlist.getError);

export const getWishlistItemsIds = createSelector(getWishlistState, fromWishlist.getItemsIds);
export const getWishlistItemsCount = createSelector(getWishlistItemsIds, state => state.length);

export const getWishlistProducts = createSelector<
    fromWishlist.State & fromRoot.State,
    { id: number, color: string }[],
    Product[],
    WishlistItem[]
>(getWishlistItemsIds, fromProduct.productState.getAllProducts, (ids, products) => {
    if (ids.length === 0 || products.length === 0) {
        return [];
    }

    // id: color Indexable
    const idsMap = ids.reduce((acc, id) => {
        acc[`${id.id}_${id.color}`] = { color: id.color };
        return acc;
    }, {});

    const result = Object.keys(idsMap).map((id) => ({
        ...products.find(p => p.id === parseInt(id.split('_')[0], 10)),
        color: idsMap[id].color,
    }));

    return result;
});

export const productInWishlist = createSelector(getWishlistItemsIds, fromProduct.productState.getSelectedProductId, (ids, selectId) => {
    if (!selectId) { return false; }
    return ids.map(id => id.id.toString()).indexOf(selectId.toString()) >= 0;
});

// Order
export const getOrderState = createSelector(getCartFeatureState, state => state.order);

export const getSelectedOrderId = createSelector(getOrderState, fromOrder.getSelectedId);
export const getOrderIsLoading = createSelector(getOrderState, fromOrder.getIsLoading);
export const getOrderError = createSelector(getOrderState, fromOrder.getError);
export const getProcessingOrder = createSelector(getOrderState, fromOrder.getProcessingOrder);

export const {
    selectEntities: getOrderEntities,
    selectAll: getAllOrders,
    selectTotal: getTotalOrders,
} = fromOrder.adapter.getSelectors(getOrderState);

export const getSelectedOrder = createSelector(getOrderEntities, getSelectedOrderId, (entities, selectedId) => {
    return selectedId && entities[selectedId];
});

export const getOrderProducts = createSelector(getSelectedOrder, fromProduct.productState.getAllProducts, (order, products) => {
    const idsMap = order.line_items.reduce((acc, item) => {
        acc[item.id] = { quantity: item.quantity };
        return acc;
    }, {});
    const result = Object.keys(idsMap).map((id) => ({
        ...products.find(p => p.id === parseInt(id, 10)),
        quantity: idsMap[id].quantity,
    }));
    return result;
});

// Country
export const getCountriesState = createSelector(getCartFeatureState, state => state.countries);

export const getSelectedCountryId = createSelector(getCountriesState, fromCountry.getSelectedId);


export const {
    selectEntities: getCountryEntities,
    selectAll: getAllCountries,
    selectTotal: getTotalCountries,
} = fromCountry.adapter.getSelectors(getCountriesState);

export const getSelectedCountry = createSelector(getCountryEntities, getSelectedCountryId, getAllCountries, (entities, selectedId, countries) => {
    if (selectedId) {
        return selectedId && entities[selectedId];
    } else {
        const defaultCountry = countries.find(country => country.code === 'US');
        return defaultCountry ? defaultCountry : countries[0];
    }
});


export const getCountryIsLoading = createSelector(getCountriesState, fromCountry.getIsLoading);
export const getCountryError = createSelector(getCountriesState, fromCountry.getError);

// Currency 
export const getCurrenciesState = createSelector(getCartFeatureState, (state: State) => state.currency);

export const {
    selectEntities: getCurrenciesEntities,
    selectAll: getAllCurrencies,
    selectTotal: getTotalCurrencies,
} = fromCurrency.adapter.getSelectors(getCurrenciesState);

export const getCurrenciesIsLoading = createSelector(getCurrenciesState, fromCurrency.getIsLoading);
export const getCurrenciesError = createSelector(getCurrenciesState, fromCurrency.getError);

export const getSelectedCurrencyCode = createSelector(getCurrenciesState, fromCurrency.getSelectedCode);

export const getCurrentCurrency = createSelector(getCurrenciesEntities, getSelectedCurrencyCode, (entities, selectedId) => {
    return selectedId && entities[selectedId];
});