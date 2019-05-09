import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { WishlistPage } from './wishlist.page';
import { ShareuiItemsModule } from '@ecom9/shareui/items';
import { ShareuiCartModule } from '@ecom9/shareui/cart';

const routes: Routes = [
  {
    path: '',
    component: WishlistPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShareuiItemsModule,
    ShareuiCartModule,
    RouterModule.forChild(routes)
  ],
  declarations: [WishlistPage]
})
export class WishlistPageModule {}
