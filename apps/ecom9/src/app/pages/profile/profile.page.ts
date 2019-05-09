import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as fromStore from '../../store';
import * as fromAuth from '../../store/auth';
import * as fromCart from '../../store/cart';
import { Observable } from 'rxjs';
import { Customer, Address } from '@ecom9/models';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'ecom9-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss']
})
export class ProfilePage implements OnInit {
  profile$: Observable<Customer>;
  constructor(
    private store: Store<fromStore.State>,
    private navCtrl: NavController,
  ) {
    this.profile$ = this.store.select(fromAuth.authState.getCustomer);
  }

  ngOnInit() { }

  onEdit() {
    this.navCtrl.navigateForward('/profile/edit');
  }

  onSelectAddress(address: Address) {
    this.store.dispatch(new fromCart.addressActions.SelectAddress({ id: address.id }));
    this.navCtrl.navigateForward(`/address/edit/${address.id}`);
  }
}
