import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { IonicModule, NavController, Platform } from '@ionic/angular';
@NgModule({
  imports: [
    CommonModule,
    IonicModule
  ],
  declarations: [
    WelcomeComponent
  ],
  exports: [
    WelcomeComponent
  ],
  providers: [
    NavController,
    Platform
  ]
})
export class ShareuiWelcomeModule { }

export { WelcomeComponent };