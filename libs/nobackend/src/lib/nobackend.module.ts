import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesService } from './category.service';
import { ProductsService } from './product.service';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './auth.service';
import { StorageService } from './storage.service';
import { AddressService } from './address.service';
import { CartService } from './cart.service';
import { WishlistService } from './wishlist.service';
import { CountriesService } from './country.service';
import { CurrenciesService } from './currency.service';

@NgModule({
  imports: [CommonModule, HttpClientModule]
})
export class NobackendModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: NobackendModule,
      providers: [
        AuthService,
        ProductsService,
        CategoriesService,
        StorageService,
        AddressService,
        CartService,
        WishlistService,
        CountriesService,
        CurrenciesService,
      ]
    };
  }
}

export {
  CategoriesService,
  ProductsService,
  AuthService,
  StorageService,
  AddressService,
  CartService,
  WishlistService,
  CountriesService,
  CurrenciesService,
};
