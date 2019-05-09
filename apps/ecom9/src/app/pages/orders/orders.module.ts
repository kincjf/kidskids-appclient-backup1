import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { OrdersPage } from './orders.page';
import { OrderPage } from './order/order.page';
import { OrderViewComponent } from './order-view/order-view.component';
import { ShareuiOrdersModule } from '@ecom9/shareui/orders';
import { ShareuiOrderModule } from '@ecom9/shareui/order';
import { ShareuiItemsModule } from '@ecom9/shareui/items';

const routes: Routes = [
  {
    path: '',
    component: OrdersPage
  },
  {
    path: ':id',
    component: OrderPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShareuiItemsModule,
    ShareuiOrderModule,
    ShareuiOrdersModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    OrdersPage, 
    OrderPage,
    OrderViewComponent
  ]
})
export class OrdersPageModule {}
