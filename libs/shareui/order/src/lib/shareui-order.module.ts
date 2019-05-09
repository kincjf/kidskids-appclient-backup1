import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderComponent } from './components/order/order.component';
import { IonicModule } from '@ionic/angular';
import { ShareuiItemsModule } from '@ecom9/shareui/items';
import { ShareuiAddressModule } from '@ecom9/shareui/address';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    ShareuiAddressModule,
    ShareuiItemsModule,
  ],
  declarations: [OrderComponent],
  exports: [OrderComponent]
})
export class ShareuiOrderModule { }
