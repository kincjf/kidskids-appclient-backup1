import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as fromStore from '../../store';
import * as fromCart from '../../store/cart';
import * as fromProduct from '../../store/product';
import { Observable } from 'rxjs';
import { Category, Product, Currency } from '@ecom9/models';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'ecom9-hotdeal',
  templateUrl: './hotdeal.page.html',
  styleUrls: ['./hotdeal.page.scss']
})
export class HotDealPage implements OnInit {
  categories$: Observable<Category[]>;
  constructor(
    private store: Store<fromStore.State>,
    private navCtrl: NavController,
  ) {
    this.categories$ = this.store.select(fromProduct.productState.getAllCategories);
  }

  ngOnInit() { }

  goCategory() {
    // random go to a category
    this.categories$.subscribe(cats => {
      if (cats) {
        const categories = cats.filter(category => category.parent !== 0);
        const rnd = Math.floor(Math.random() * (categories.length - 1));
        this.navCtrl.navigateRoot('home');
        setTimeout(() => {
          this.store.dispatch(new fromProduct.categoryActions.SelectCategory({ id: categories[rnd].id }));
        }, 200);
      }
    })
  }
}
