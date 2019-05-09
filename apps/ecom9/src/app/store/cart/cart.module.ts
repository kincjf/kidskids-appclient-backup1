import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromCart from './reducers';
import { EffectsModule } from '@ngrx/effects';
import { CartEffects } from './effects/cart.effects';
import { CartService, AddressService, WishlistService, CountriesService, CurrenciesService } from '@ecom9/nobackend';
import { AddressEffects } from './effects/address.effects';
import { WishlistEffects } from './effects/wishlist.effects';
import { CountryEffects } from './effects/country.effects';
import { CurrencyEffects } from './effects/currency.effects';
import { OrderEffects } from './effects/order.effects';


@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('cart', fromCart.reducers),
    EffectsModule.forFeature([
      CartEffects,
      AddressEffects,
      WishlistEffects,
      CountryEffects,
      CurrencyEffects,
      OrderEffects,
    ])
  ],
  declarations: [],
  providers: [
    CartService,
    AddressService,
    WishlistService,
    CountriesService,
    CurrenciesService,
  ]
})
export class CartModule { }
