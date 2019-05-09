import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocialComponent } from './components/social/social.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  imports: [CommonModule, IonicModule],
  declarations: [SocialComponent],
  exports: [SocialComponent]
})
export class ShareuiSocialModule {}
