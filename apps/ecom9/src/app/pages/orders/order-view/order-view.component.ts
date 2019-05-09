import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as fromStore from '../../../store';
import * as fromCart from '../../../store/cart';

import { Observable } from 'rxjs';
import { Order, Currency, CartProduct } from '@ecom9/models';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'ecom9-order-view',
  templateUrl: './order-view.component.html',
  styleUrls: ['./order-view.component.scss']
})
export class OrderViewComponent implements OnInit {
  order$: Observable<Order>;
  products$: Observable<CartProduct[]>;
  currency$: Observable<Currency>;

  constructor(
    private store: Store<fromStore.State>,
    private navCtrl: NavController,
  ) {
    this.order$ = this.store.select(fromCart.cartState.getSelectedOrder);
    this.currency$ = this.store.select(fromCart.cartState.getCurrentCurrency);
    this.products$ = this.store.select(fromCart.cartState.getOrderProducts);
  }

  ngOnInit() { 
    this.products$.subscribe(data => console.log(data));
  }

  onSelect(product: CartProduct) {
    this.navCtrl.navigateForward(`/product/${product.id}`);
  }
}
