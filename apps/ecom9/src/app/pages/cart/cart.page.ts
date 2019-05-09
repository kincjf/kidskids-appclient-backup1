import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as fromStore from '../../store';
import * as fromCart from '../../store/cart';
import { Observable } from 'rxjs';
import { CartProduct, Currency } from '@ecom9/models';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'ecom9-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss']
})
export class CartPage implements OnInit {
  cartProducts$: Observable<CartProduct[]> = this.store.select(fromCart.cartState.getCartProducts);
  total$ = this.store.select(fromCart.cartState.getCartTotal);

  currency$: Observable<Currency>;
  
  constructor(
    private store: Store<fromStore.State>,
    private navCtrl: NavController,
  ) {
    this.currency$ = this.store.select(fromCart.cartState.getCurrentCurrency);
  }

  ngOnInit() { }

  checkout() {
    this.navCtrl.navigateForward('/checkout');
  }

  onDelete(product: CartProduct) {
    this.store.dispatch(new fromCart.cartActions.RemoveItem({ id: product.id, variant: product.variant, price: product.price, images: product.images, color: product.color }));
  }

  onIncrement(product: CartProduct) {
    this.store.dispatch(new fromCart.cartActions.AddItem({ id: product.id, variant: product.variant, price: product.price, images: product.images, color: product.color }));
  }

  onDecrement(product: CartProduct) {
    this.store.dispatch(new fromCart.cartActions.RemoveOne({ id: product.id, variant: product.variant, price: product.price, images: product.images, color: product.color }));
  }

  goProduct(product: CartProduct) {
    this.navCtrl.navigateForward(`/product/${product.id}`);
  }
}
