import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForgotFormComponent } from './components/forgot-form/forgot-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule
  ],
  declarations: [ForgotFormComponent],
  exports: [ForgotFormComponent]
})
export class ShareuiForgotModule { }
