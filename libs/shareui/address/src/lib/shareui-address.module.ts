import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddressFormComponent } from './components/address-form/address-form.component';
import { AddressListComponent } from './components/address-list/address-list.component';
import { AddressItemComponent } from './components/address-item/address-item.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
  ],
  declarations: [
    AddressFormComponent,
    AddressListComponent,
    AddressItemComponent
  ],
  exports: [AddressFormComponent, AddressListComponent, AddressItemComponent]
})
export class ShareuiAddressModule {}
