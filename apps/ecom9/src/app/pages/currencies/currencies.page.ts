import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as fromStore from '../../store';
import * as fromCart from '../../store/cart';

import { Country, CountryState } from '@ecom9/models';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';


@Component({
  selector: 'ecom9-currencies',
  templateUrl: './currencies.page.html',
  styleUrls: ['./currencies.page.scss'],
})
export class CurrenciesPage implements OnInit {
  currencies$: Observable<Country[]>;

  constructor(
    private store: Store<fromStore.State>,
    private navCtrl: NavController,
  ) {
    this.currencies$ = this.store.select(fromCart.cartState.getAllCurrencies);
  }

  ngOnInit() { }

  onSelect(currency: Country) {
    this.store.dispatch(new fromCart.currencyActions.SelectCurrency({ code: currency.code }));
    this.navCtrl.back();
  }
}
