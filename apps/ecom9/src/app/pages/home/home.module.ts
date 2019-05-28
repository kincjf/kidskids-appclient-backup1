import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { HomePage } from './home.page';
import { ShareuiCategoriesHozModule } from '@ecom9/shareui/categories-hoz';
import { ShareuiProductsModule } from '@ecom9/shareui/products';
import { ShareuiCartModule } from '@ecom9/shareui/cart';

const routes: Routes = [
  {
    path: '',
    component: HomePage
  },

];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShareuiCategoriesHozModule,
    ShareuiProductsModule,
    ShareuiCartModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
