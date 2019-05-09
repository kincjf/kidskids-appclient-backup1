import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListHozComponent } from './components/product-list-hoz/product-list-hoz.component';
import { IonicModule } from '@ionic/angular';
import { ShareuiProductBoxModule } from '@ecom9/shareui/product-box';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    ShareuiProductBoxModule,
  ],
  declarations: [ProductListHozComponent],
  exports: [ProductListHozComponent]
})
export class ShareuiProductsHozModule {}
