import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RatingsPage } from './ratings.page';
import { ShareuiProductModule } from '@ecom9/shareui/product';

const routes: Routes = [
  {
    path: '',
    component: RatingsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShareuiProductModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RatingsPage]
})
export class RatingsPageModule {}
