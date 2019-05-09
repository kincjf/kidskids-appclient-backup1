import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as fromStore from '../../store';
import * as fromCart from '../../store/cart';
import { NavController } from '@ionic/angular';
import { Currency, Country } from '@ecom9/models';
import { Observable } from 'rxjs';

@Component({
  selector: 'ecom9-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss']
})
export class SettingsPage implements OnInit {
  currency$: Observable<Currency>;
  country$: Observable<Country>;
  constructor(
    private store: Store<fromStore.State>,
    private navCtrl: NavController,
  ) { 
    this.currency$ = this.store.select(fromCart.cartState.getCurrentCurrency);
    this.country$ = this.store.select(fromCart.cartState.getSelectedCountry);
  }

  ngOnInit() { }

  logout() {
    this.navCtrl.navigateBack('/login');
  }

  goToEditProfile() {
    this.navCtrl.navigateForward('/profile');
  }

  goToAddressBook() {
    this.navCtrl.navigateForward('/address');
  }

  goToCountries() {
    this.navCtrl.navigateForward('/countries');
  }

  goToCurrencies() {
    this.navCtrl.navigateForward('/currencies');
  }

  goToLanguages() {

  }

  goToNotificationSettings() {

  }

  goToChangePassword() {

  }

  goToPolicy() {
  }

  goWelcome() {
    this.navCtrl.navigateForward('/welcome');
  }
}
