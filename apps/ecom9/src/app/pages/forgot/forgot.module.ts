import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ForgotPage } from './forgot.page';
import { ShareuiForgotModule } from '@ecom9/shareui/forgot';

const routes: Routes = [
  {
    path: '',
    component: ForgotPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShareuiForgotModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ForgotPage]
})
export class ForgotPageModule {}
