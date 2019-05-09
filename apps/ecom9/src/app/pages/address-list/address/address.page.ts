import { Component, OnInit } from '@angular/core';
import { Address } from '@ecom9/models';
import { UUID } from 'angular2-uuid';

import { Store } from '@ngrx/store';
import * as rootState from '../../../store';
import * as fromCart from '../../../store/cart';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'ecom9-address',
  templateUrl: './address.page.html',
  styleUrls: ['./address.page.scss']
})
export class AddressPage implements OnInit {
  constructor(
    private store: Store<rootState.State>,
    private navCtrl: NavController,
  ) { }

  ngOnInit() { }

  onSave(address: Address) {
    const id = UUID.UUID();
    const newAddress = Object.assign({}, address);
    newAddress.id = id;

    this.store.dispatch(new fromCart.addressActions.AddItem(newAddress));
  }
}
