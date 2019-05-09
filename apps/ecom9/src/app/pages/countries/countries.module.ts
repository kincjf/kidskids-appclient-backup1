import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CountriesPage } from './countries.page';
import { ShareuiCountryModule } from '@ecom9/shareui/country';

const routes: Routes = [
  {
    path: '',
    component: CountriesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShareuiCountryModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CountriesPage]
})
export class CountriesPageModule {}
