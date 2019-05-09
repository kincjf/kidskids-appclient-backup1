import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as fromStore from '../../../store';
import * as fromCart from '../../../store/cart';
import * as fromProduct from '../../../store/product';
import { Product, ProductVariant, ProductReview, Currency, WishlistItem, CartProduct } from '@ecom9/models';
import { Observable } from 'rxjs';
import { ToastController, NavController } from '@ionic/angular';

@Component({
  selector: 'ecom9-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.scss']
})
export class ProductViewComponent implements OnInit {
  product$: Observable<Product>;
  products$: Observable<Product[]>;
  productVariants$: Observable<ProductVariant[]>;
  inWishList$: Observable<boolean>;
  reviews$: Observable<ProductReview[]>;
  reviewsLoading$: Observable<boolean>;
  currency$: Observable<Currency>;

  constructor(
    private store: Store<fromStore.State>,
    public toastController: ToastController,
    public navCtrl: NavController,
  ) {
    this.product$ = this.store.select(fromProduct.productState.getSelectedProduct);
    this.products$ = this.store.select(fromProduct.productState.getRelatedProducts);
    this.productVariants$ = this.store.select(fromProduct.productState.getVariantProducts);
    this.currency$ = this.store.select(fromCart.cartState.getCurrentCurrency);
    this.inWishList$ = this.store.select(fromCart.cartState.productInWishlist);
    this.reviews$ = this.store.select(fromProduct.productState.getProductReviews);
    this.reviewsLoading$ = this.store.select(fromProduct.productState.getReviewIsLoading);

    this.product$.subscribe(product => {
      if (product) {
        this.store.dispatch(new fromProduct.reviewActions.LoadProductReviews({ product_id: product.id }));
        if (product.type === 'variable') {
          this.store.dispatch(new fromProduct.variantActions.LoadVariants({ product_id: product.id }));
        }
      }
    });
  }

  ngOnInit() { }

  async add2Cart(data: CartProduct) {
    const toast = await this.toastController.create({
      message: 'Item added to cart',
      position: 'top',
      duration: 2000,
    });
    toast.present();

    for (let i = 1; i <= data.quantity; i++) {
      this.store.dispatch(new fromCart.cartActions.AddItem({ id: data.id, variant: data.variant, price: data.price, images: data.images, color: data.color }));
    }
  }

  onAddWishlistItem(data: WishlistItem) {
    this.store.dispatch(new fromCart.wishlistActions.AddItem({ id: data.id, color: data.color }));
  }

  onRemoveWishlistItem(data: WishlistItem) {
    this.store.dispatch(new fromCart.wishlistActions.RemoveItem({ id: data.id, color: data.color }));
  }

  onSelectProduct(product: Product) {
    this.store.dispatch(new fromProduct.productActions.SelectProduct({ id: product.id }));
    this.navCtrl.navigateForward(`/product/${product.id}`);
  }

  selectReview(product: Product) {
    this.navCtrl.navigateForward(`/ratings`);
  }
}
