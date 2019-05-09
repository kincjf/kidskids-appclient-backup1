import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ProfilePage } from './profile.page';
import { EditProfilePage } from './edit-profile/edit-profile.page';
import { ShareuiProfileModule } from '@ecom9/shareui/profile';

const routes: Routes = [
  {
    path: '',
    component: ProfilePage
  },
  {
    path: 'edit',
    component: EditProfilePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShareuiProfileModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    ProfilePage,
    EditProfilePage
  ]
})
export class ProfilePageModule { }
