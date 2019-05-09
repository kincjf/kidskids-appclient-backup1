import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import * as rootState from '../../../store';
import * as fromCart from '../../../store/cart';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { tap, map } from 'rxjs/operators';

@Component({
  selector: 'ecom9-selected-address',
  templateUrl: './selected-address.page.html',
  styleUrls: ['./selected-address.page.scss']
})
export class SelectedAddressPage implements OnInit, OnDestroy {
  actionsSubscription: Subscription;
  constructor(private store: Store<rootState.State>, route: ActivatedRoute) {
    this.actionsSubscription = route.params
      .pipe(
        tap(params => params.id),
        map(
          params => new fromCart.addressActions.SelectAddress({ id: params.id })
        )
      )
      .subscribe(store);
  }

  ngOnInit() {}

  ngOnDestroy() {
    this.actionsSubscription.unsubscribe();
  }
}
