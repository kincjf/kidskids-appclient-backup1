import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Address } from '@ecom9/models';
import { Store, select } from '@ngrx/store';
import * as rootState from '../../../store';
import * as fromCart from '../../../store/cart';

@Component({
  selector: 'ecom9-address-view',
  templateUrl: './address-view.component.html',
  styleUrls: ['./address-view.component.scss']
})
export class AddressViewComponent implements OnInit {
  address$: Observable<Address>;
  constructor(private store: Store<rootState.State>) {
    this.address$ = this.store.pipe(
      select(fromCart.cartState.getSelectedAddress)
    );
  }

  ngOnInit() {}

  onSave(address: Address) {
    this.store.dispatch(new fromCart.addressActions.UpdateItem(address));
  }
}
