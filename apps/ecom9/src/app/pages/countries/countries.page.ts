import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as fromStore from '../../store';
import * as fromCart from '../../store/cart';

import { Country, CountryState } from '@ecom9/models';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';

@Component({
  selector: 'ecom9-countries',
  templateUrl: './countries.page.html',
  styleUrls: ['./countries.page.scss'],
})
export class CountriesPage implements OnInit {
  countries$: Observable<Country[]>;

  constructor(
    private store: Store<fromStore.State>,
    private navCtrl: NavController,
  ) {
    this.countries$ = this.store.select(fromCart.cartState.getAllCountries);
  }

  ngOnInit() { }

  onSelect(country: Country) {
    this.store.dispatch(new fromCart.countryActions.SelectCountry({ code: country.code }));
    this.navCtrl.back();
  }
}
