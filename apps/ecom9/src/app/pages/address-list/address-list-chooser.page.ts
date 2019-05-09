import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as fromStore from '../../store';
import * as fromCart from '../../store/cart';

import { Address } from '@ecom9/models';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';

@Component({
  selector: 'ecom9-address-list',
  templateUrl: './address-list.page.html',
  styleUrls: ['./address-list.page.scss']
})
export class AddressListChooserPage implements OnInit {
  addresses$: Observable<Address[]>;

  constructor(
    private store: Store<fromStore.State>,
    private navCtrl: NavController,
  ) {
    this.addresses$ = this.store.select(fromCart.cartState.getAllAddresses);
  }

  ngOnInit() { }

  onSelect(address: Address) {
    this.store.dispatch(new fromCart.addressActions.ChooseAddress({ id: address.id }));
    this.navCtrl.back();
  }

  onRemove(address: Address) {
  }

  newAddress() {
    this.navCtrl.navigateForward('address/new');
  }

  onDefault(address: Address) {
  }
}
