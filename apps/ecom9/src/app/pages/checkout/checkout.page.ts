import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as fromStore from '../../store';
import * as fromAuth from '../../store/auth';
import * as fromCart from '../../store/cart';
import { Observable } from 'rxjs';
import { Address, CartProduct, Currency, Payment, Order, Customer } from '@ecom9/models';
import { NavController } from '@ionic/angular';
import { UUID } from 'angular2-uuid';
import { take, tap } from 'rxjs/operators';

@Component({
  selector: 'ecom9-checkout',
  templateUrl: './checkout.page.html',
  styleUrls: ['./checkout.page.scss']
})
export class CheckoutPage implements OnInit {

  totalAddress$: Observable<number> = this.store.select(fromCart.cartState.getTotalAddresses);
  selectAddress$: Observable<Address> = this.store.select(fromCart.cartState.getChoosedAddress);

  cartProducts$: Observable<CartProduct[]> = this.store.select(fromCart.cartState.getCartProducts);
  total$: Observable<number> = this.store.select(fromCart.cartState.getCartTotal);

  isAuthenticated$: Observable<boolean> = this.store.select(fromAuth.authState.getIsAuthenticated);
  customer$: Observable<Customer> = this.store.select(fromAuth.authState.getCustomer);

  proccessingOrder$: Observable<boolean> = this.store.select(fromCart.cartState.getProcessingOrder);
  order: Order = new Object();

  payments: Payment[] = [
    {
      id: 'cod',
      title: 'COD',
      method_title: 'COD',
      method_description: 'Have your customers pay with cash (or by other means) upon delivery.'
    },
    {
      id: 'paypal',
      title: 'Paypal',
      method_title: 'Paypal',
      method_description: 'PayPal Standard redirects customers to PayPal to enter their payment information.'
    },
    {
      id: 'stripe',
      title: 'Stripe',
      method_title: 'Stripe',
      method_description: 'Stripe Standard redirects customers to Stripe to enter their payment information.'
    }
  ];

  currency$: Observable<Currency>;
  
  constructor(
    private store: Store<fromStore.State>,
    private navCtrl: NavController,
  ) {
    this.currency$ = this.store.select(fromCart.cartState.getCurrentCurrency);
  }

  ngOnInit() {
    this.selectAddress$.subscribe(address => {
      this.order.shipping = address;
    });

    this.customer$.subscribe((customer: Customer) => {
      if (customer) {
        this.order.customer = customer;
        this.order.billing = customer.billing;
      }
    });

    this.isAuthenticated$.subscribe(auth => {
      if (!auth) {
        this.navCtrl.navigateForward('/login');
      }
    });
  }

  addNewAddress() {
    this.navCtrl.navigateForward(`/address/new`);
  }

  changeAddress() {
    this.navCtrl.navigateForward(`/address/choose`);
  }

  onDelete(product: CartProduct) {
    this.store.dispatch(new fromCart.cartActions.RemoveItem({
      id: product.id,
      variant: product.variant,
      price: product.price,
      images: product.images,
      color: product.color
    }));
  }

  onIncrement(product: CartProduct) {
    this.store.dispatch(new fromCart.cartActions.AddItem({
      id: product.id,
      variant: product.variant,
      price: product.price,
      images: product.images,
      color: product.color
    }));
  }

  onDecrement(product: CartProduct) {
    this.store.dispatch(new fromCart.cartActions.RemoveOne({
      id: product.id,
      variant: product.variant,
      price: product.price,
      images: product.images,
      color: product.color
    }));
  }

  goProduct(product: CartProduct) {
    this.navCtrl.navigateForward(`/product/${product.id}`);
  }

  changePaymentMethod(payment: string) {
    this.order.payment_method = payment;
  }

  placeOrder() {
    this.order.id = UUID.UUID();
    this.order.date_created = new Date();
    this.order.date_created_gmt = new Date();
    this.total$
      .pipe(take(1))
      .subscribe(total => {
        this.order.total = total;
      });

    this.cartProducts$
      .pipe(take(1))
      .subscribe(products => {
        this.order.line_items = products;
      });

    this.store.dispatch(new fromCart.orderActions.AddOrder(this.order));

    // clean cart
    setTimeout(() => {
      this.store.dispatch(new fromCart.cartActions.RemoveAllItems());
      this.navCtrl.navigateRoot('/home');
    }, 250);
  }
}
