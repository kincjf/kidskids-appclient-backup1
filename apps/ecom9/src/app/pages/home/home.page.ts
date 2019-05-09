import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from '../../store';
import * as fromCart from '../../store/cart';
import * as fromProduct from '../../store/product';
import { Observable } from 'rxjs';
import { Category, Product, Currency } from '@ecom9/models';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'ecom9-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage implements OnInit {
  categories$: Observable<Category[]>;
  selectedCategory$: Observable<Category>;
  selectId$: Observable<number>;
  categoriesLoading$: Observable<boolean>;

  products$: Observable<Product[]>;
  isLoading$: Observable<boolean>;
  error$: Observable<any>;

  cartTotal$: Observable<number>;

  currency$: Observable<Currency>;
  imageSize: string = '416x624';
  constructor(
    private store: Store<fromStore.State>,
    private navCtrl: NavController,
  ) {
    this.categories$ = this.store.select(fromProduct.productState.getAllCategories);
    this.categoriesLoading$ = this.store.select(fromProduct.productState.getCategoriesIsLoading);
    this.selectId$ = this.store.select(fromProduct.productState.getSelectedCategoryId);

    this.isLoading$ = this.store.select(fromProduct.productState.getProductIsLoading);
    this.error$ = this.store.select(fromProduct.productState.getProductError);

    this.cartTotal$ = this.store.select(fromCart.cartState.getCartItemsCount);
    this.currency$ = this.store.select(fromCart.cartState.getCurrentCurrency);
  }

  ngOnInit() {
    this.selectId$
      .subscribe(id => {
        if (id === -1) {
          this.products$ = this.store.select(fromProduct.productState.getAllProducts);
        } else {
          this.products$ = this.store.select(fromProduct.productState.getProductsByCategory);
        }
      });
  }

  // categories 
  onSelectCategory(id: number) {
    this.store.dispatch(new fromProduct.categoryActions.SelectCategory({ id: id }));
  }

  onSelectProduct(product: Product) {
    this.store.dispatch(new fromProduct.productActions.SelectProduct({ id: product.id }));
    this.navCtrl.navigateForward(`/product/${product.id}`);
  }

  onCart() {
    this.navCtrl.navigateForward('/cart');
  }
}
