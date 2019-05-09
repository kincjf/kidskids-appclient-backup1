import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ProductPage } from './product.page';
import { ProductViewComponent } from './product-view/product-view.component';
import { ShareuiProductModule } from '@ecom9/shareui/product';
import { ShareuiCartModule } from '@ecom9/shareui/cart';
import { ShareuiProductsHozModule } from '@ecom9/shareui/products-hoz';

const routes: Routes = [
  {
    path: ':id',
    component: ProductPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShareuiProductModule,
    ShareuiCartModule,
    ShareuiProductsHozModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ProductPage, ProductViewComponent]
})
export class ProductPageModule {}
