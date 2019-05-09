import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from '../../store';
import * as fromAuth from '../../store/auth';
import * as fromProduct from '../../store/product';
import { ProductReview, Customer, Product } from '@ecom9/models';
import { Observable } from 'rxjs';

@Component({
  selector: 'ecom9-ratings',
  templateUrl: './ratings.page.html',
  styleUrls: ['./ratings.page.scss'],
})
export class RatingsPage implements OnInit {
  reviews$: Observable<ProductReview[]>;
  customer$: Observable<Customer>;
  product$: Observable<Product>;
  constructor(
    private store: Store<fromStore.State>,
  ) {
    this.customer$ = this.store.select(fromAuth.authState.getCustomer);
    this.reviews$ = this.store.select(fromProduct.productState.getProductReviews);
    this.product$ = this.store.select(fromProduct.productState.getSelectedProduct);
  }

  ngOnInit() {
  }

  onReview(rating) {
    this.store.dispatch(new fromProduct.reviewActions.AddReview(rating));
  }
}
