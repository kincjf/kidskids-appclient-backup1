import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './components/cart/cart.component';
import { CartTotalComponent } from './components/cart-total/cart-total.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
  ],
  declarations: [CartComponent, CartTotalComponent],
  exports: [CartComponent, CartTotalComponent]
})
export class ShareuiCartModule {}
