import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as fromStore from '../../store';
import * as fromCart from '../../store/cart';
import * as fromProduct from '../../store/product';
import { Observable } from 'rxjs';
import { Order, Currency } from '@ecom9/models';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'ecom9-orders',
  templateUrl: './orders.page.html',
  styleUrls: ['./orders.page.scss']
})
export class OrdersPage implements OnInit {
  orders$: Observable<Order[]>;
  currency$: Observable<Currency>;
  
  constructor(
    private store: Store<fromStore.State>,
    private navCtrl: NavController,
  ) {
    this.orders$ = this.store.select(fromCart.cartState.getAllOrders);
    this.currency$ = this.store.select(fromCart.cartState.getCurrentCurrency);
  }

  ngOnInit() { 
    this.orders$.subscribe(orders => {
      if (orders) {
        const productsHasVariants = {};
        orders.forEach(order => {
          console.log(order);
          order.line_items.forEach((item) => {
            if (item.variant !== 0) {
              productsHasVariants[item.id] = item.id;
            }
          });
        });
        const hasVariantIds = Object.keys(productsHasVariants).map((id) => parseInt(id, 10));
        console.log(hasVariantIds);
        hasVariantIds.forEach(id => {
          if (id) {
            this.store.dispatch(new fromProduct.variantActions.LoadVariants({ product_id: id }));
          }
        });
      }
    });

  }

  onSelect(order: Order) {
    this.navCtrl.navigateForward(`/orders/${order.id}`)
  }
}
