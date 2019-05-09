import { Component, OnInit, Input, Output, EventEmitter, OnChanges, ViewChild } from '@angular/core';
import { Product, ProductReview, Currency, ProductVariant, WishlistItem, CartProduct } from '@ecom9/models';
import { IonSlides } from '@ionic/angular';
@Component({
  selector: 'xui-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit, OnChanges {
  @Input() product: Product;
  @Input() currency: Currency;
  @Input() variants: ProductVariant[];
  @Input() reviews: ProductReview[];
  @Input() reviewsLoading: boolean;
  @Input() inWishList: boolean;

  @Output() select = new EventEmitter<Product>();
  @Output() addCartItem = new EventEmitter<CartProduct>();
  @Output() addWishlistItem = new EventEmitter<WishlistItem>();
  @Output() removeWishlistItem = new EventEmitter<WishlistItem>();

  quantity = 1;
  images: any[] = [];
  selectedVariant: ProductVariant;

  @ViewChild('slider') slider: IonSlides;

  inc() {
    this.quantity++;
  }

  dec() {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }

  constructor() {
  }

  ngOnInit() {
  }

  ngOnChanges() {
    if (this.product) {
      this.images = [...this.product.images]
    }
    setTimeout(() => {
      if (this.variants) {
        this.variants.forEach(variant => {
          let flgFounded = false;
          this.product.images.forEach(image => {
            if (variant) {
              if (variant.image.src === image.src) {
                flgFounded = true;
              }
            }
          });

          if (!flgFounded && variant) {
            this.images.push(variant.image);
            // this.product.images.push(variant.image);
          }
        });

        if (this.variants.length >= 0) {
          this.selectedVariant = this.variants[0];
          if (this.selectedVariant) {
            const pos = this.product.images.indexOf(this.selectedVariant.image);
            this.slider.slideTo(pos);
          }
        }
      }
    }, 500);
  }

  selectVariant(variant: ProductVariant) {
    this.selectedVariant = variant;
    const pos = this.product.images.indexOf(variant.image);
    this.slider.slideTo(pos);
  }

  getInWishList(): string {
    if (this.inWishList) {
      return 'primary';
    } else {
      return 'light';
    }
  }

  add2Cart() {
    let cartItem: CartProduct = Object.assign({}, {
      ...this.product,
      quantity: this.quantity,
      price: this.selectedVariant ? this.selectedVariant.price : this.product.price,
      variation_id: this.selectedVariant ? this.selectedVariant.id : 0,
      color: this.selectedVariant ? this.selectedVariant.attributes[0].option : '',
      images: this.selectedVariant ? [this.selectedVariant.image] : [this.product.images[0]]
    });

    this.addCartItem.emit(cartItem);
  }

  manageWishlist() {
    const wl: WishlistItem = {
      ...this.product,
      color: this.selectedVariant ? this.selectedVariant.attributes[0].option : ''
    }

    if (this.inWishList) {
      this.removeWishlistItem.emit(wl);
    } else {
      this.addWishlistItem.emit(wl);
    }
  }

  getImage(image) {
    return image;
  }

  getVariantImage(image) {
    const fileExt = `.${image.split('.').pop()}`;
    const newImage = image.replace(fileExt, `-150x150${fileExt}`);

    return newImage;
  }

  selectReview() {
    this.select.emit(this.product);
  }
}
