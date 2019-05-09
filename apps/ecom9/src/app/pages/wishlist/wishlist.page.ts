import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from '../../store';
import * as fromCart from '../../store/cart';
import { Observable } from 'rxjs';
import { WishlistItem, Currency, CartProduct } from '@ecom9/models';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'ecom9-wishlist',
  templateUrl: './wishlist.page.html',
  styleUrls: ['./wishlist.page.scss']
})
export class WishlistPage implements OnInit {
  cartTotal$: Observable<number>;
  wishlistProducts$: Observable<WishlistItem[]> = this.store.select(fromCart.cartState.getWishlistProducts);
  currency$: Observable<Currency>;

  constructor(
    private store: Store<fromStore.State>,
    private navCtrl: NavController,
  ) {
    this.cartTotal$ = this.store.select(fromCart.cartState.getCartItemsCount);
    this.currency$ = this.store.select(fromCart.cartState.getCurrentCurrency);
  }

  ngOnInit() { }

  onCart() {
    this.navCtrl.navigateForward('/cart');
  }

  onDelete(product: CartProduct) {
    this.store.dispatch(new fromCart.wishlistActions.RemoveItem({ id: product.id, color: product.color }));
  }

  goProduct(product: CartProduct) {
    this.navCtrl.navigateForward(`/product/${product.id}`);
  }
}
