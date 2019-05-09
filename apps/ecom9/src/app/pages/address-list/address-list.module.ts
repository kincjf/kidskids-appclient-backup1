import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AddressListPage } from './address-list.page';
import { AddressListChooserPage } from './address-list-chooser.page';
import { AddressPage } from './address/address.page';
import { ShareuiAddressModule } from '@ecom9/shareui/address';
import { AddressViewComponent } from './address-view/address-view.component';
import { SelectedAddressPage } from './selected-address/selected-address.page';

const routes: Routes = [
  {
    path: '',
    component: AddressListPage
  },
  {
    path: 'new',
    component: AddressPage
  },
  {
    path: 'edit/:id',
    component: SelectedAddressPage
  },
  {
    path: 'choose',
    component: AddressListChooserPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShareuiAddressModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    AddressListPage,
    AddressListChooserPage,
    AddressPage,
    SelectedAddressPage,
    AddressViewComponent
  ]
})
export class AddressListPageModule { }
