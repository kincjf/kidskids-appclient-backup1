import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './components/profile/profile.component';
import { ProfileFormComponent } from './components/profile-form/profile-form.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShareuiAddressModule } from '@ecom9/shareui/address';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ShareuiAddressModule,
    IonicModule,
  ],
  declarations: [ProfileComponent, ProfileFormComponent],
  exports: [ProfileComponent, ProfileFormComponent]
})
export class ShareuiProfileModule {}
