import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as fromStore from '../../../store';
import * as fromCart from '../../../store/cart';
import { ActivatedRoute } from '@angular/router';
import { Subscription, Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { Order } from '@ecom9/models';
import { UUID } from 'angular2-uuid';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'ecom9-order',
  templateUrl: './order.page.html',
  styleUrls: ['./order.page.scss']
})
export class OrderPage implements OnInit {
  actionsSubscription: Subscription;
  order$: Observable<Order>;
  constructor(
    private store: Store<fromStore.State>,
    private route: ActivatedRoute,
    private navCtrl: NavController,
  ) {
    this.actionsSubscription = this.route.params
      .pipe(
        map(params => {
          return new fromCart.orderActions.SelectOrder({ id: params.id });
        })
      )
      .subscribe(this.store);
  }

  ngOnInit() { }

  reorder() {
    this.order$ = this.store.select(fromCart.cartState.getSelectedOrder);

    this.order$
      .pipe(take(1))
      .subscribe(o => {
        let order: Order = {
          ...o,
          id: UUID.UUID(),
          date_created: new Date(),
          date_created_gmt: new Date(),
        };

        this.store.dispatch(new fromCart.orderActions.AddOrder(order));

        this.navCtrl.back();
      });
  }
}
