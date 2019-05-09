import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CurrenciesPage } from './currencies.page';
import { ShareuiCurrencyModule } from '@ecom9/shareui/currency';

const routes: Routes = [
  {
    path: '',
    component: CurrenciesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShareuiCurrencyModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CurrenciesPage]
})
export class CurrenciesPageModule {}
