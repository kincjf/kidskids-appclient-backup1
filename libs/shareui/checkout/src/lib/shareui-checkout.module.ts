import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { PaymentListComponent } from './components/payment-list/payment-list.component';
import { PaymentItemComponent } from './components/payment-item/payment-item.component';
import { AddressComponent } from './components/address/address.component';
import { CheckoutTotalComponent } from './components/checkout-total/checkout-total.component';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
  ],
  declarations: [PaymentListComponent, PaymentItemComponent, AddressComponent, CheckoutTotalComponent],
  exports: [PaymentListComponent, PaymentItemComponent, AddressComponent, CheckoutTotalComponent]
})
export class ShareuiCheckoutModule { }
