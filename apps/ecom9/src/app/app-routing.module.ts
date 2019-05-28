import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
 // { path: '', redirectTo: 'tabs', pathMatch: 'full' },
 { path: '', loadChildren: './pages/tabs/tabs.module#TabsPageModule' },
   { path: 'home', loadChildren: './pages/home/home.module#HomePageModule' },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'signup', loadChildren: './pages/signup/signup.module#SignupPageModule' },
  { path: 'cart', loadChildren: './pages/cart/cart.module#CartPageModule' },
  { path: 'categories', loadChildren: './pages/categories/categories.module#CategoriesPageModule' },
  { path: 'checkout', loadChildren: './pages/checkout/checkout.module#CheckoutPageModule' },
  { path: 'hotdeal', loadChildren: './pages/hotdeal/hotdeal.module#HotDealPageModule' },
  { path: 'orders', loadChildren: './pages/orders/orders.module#OrdersPageModule' },
  { path: 'welcome', loadChildren: './pages/welcome/welcome.module#WelcomePageModule' },
  { path: 'product', loadChildren: './pages/product/product.module#ProductPageModule' },
  { path: 'wishlist', loadChildren: './pages/wishlist/wishlist.module#WishlistPageModule' },
  { path: 'settings', loadChildren: './pages/settings/settings.module#SettingsPageModule' },
  { path: 'profile', loadChildren: './pages/profile/profile.module#ProfilePageModule' },
  { path: 'address', loadChildren: './pages/address-list/address-list.module#AddressListPageModule' },
  { path: 'forgot', loadChildren: './pages/forgot/forgot.module#ForgotPageModule' },
  { path: 'countries', loadChildren: './pages/countries/countries.module#CountriesPageModule' },
  { path: 'currencies', loadChildren: './pages/currencies/currencies.module#CurrenciesPageModule' },
  { path: 'ratings', loadChildren: './pages/ratings/ratings.module#RatingsPageModule' },
  { path: 'tabs', loadChildren: './pages/tabs/tabs.module#TabsPageModule'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
