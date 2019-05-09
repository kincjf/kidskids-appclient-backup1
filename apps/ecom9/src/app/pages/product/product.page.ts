import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from '../../store';
import * as fromCart from '../../store/cart';
import * as fromProduct from '../../store/product';
import { Subscription, Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { NavController, IonContent } from '@ionic/angular';

@Component({
  selector: 'ecom9-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss']
})
export class ProductPage implements OnInit, OnDestroy {
  @ViewChild('content') content: IonContent;

  cartTotal$: Observable<number>;
  actionsSubscription: Subscription;
  constructor(
    private store: Store<fromStore.State>,
    private route: ActivatedRoute,
    private navCtrl: NavController,
  ) {
  }

  ionViewWillEnter() {
    this.actionsSubscription = this.route.params
      .pipe(
        map(params => {
          return new fromProduct.productActions.SelectProduct({ id: params.id });
        })
      )
      .subscribe(this.store);

    this.cartTotal$ = this.store.select(fromCart.cartState.getCartItemsCount);
  }

  ngOnInit() {

  }

  ionViewDidEnter() {
    this.content.scrollToTop(200);
  }

  ngOnDestroy() {
    this.actionsSubscription.unsubscribe();
  }

  onCart() {
    this.navCtrl.navigateForward('/cart');
  }
}
