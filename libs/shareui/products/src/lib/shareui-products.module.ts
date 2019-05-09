import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './components/product-list/product-list.component';
import { IonicModule } from '@ionic/angular';
import { ShareuiProductBoxModule } from '@ecom9/shareui/product-box';

@NgModule({
  imports: [
    CommonModule,
    ShareuiProductBoxModule,
    IonicModule
  ],
  declarations: [ProductListComponent],
  exports: [ProductListComponent]
})
export class ShareuiProductsModule {}
