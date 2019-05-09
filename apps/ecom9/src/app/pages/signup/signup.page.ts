import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as fromStore from '../../store';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'ecom9-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  constructor(
    private store: Store<fromStore.State>,
    private navCtrl: NavController,
  ) { }

  ngOnInit() {
  }

  skip() {
    this.navCtrl.navigateForward('/home');
  }

  signup(data) {
    this.navCtrl.navigateForward('/home');
  }

  goSignin() {
    this.navCtrl.navigateBack('/login');
  }

  onFacebook() {
    this.navCtrl.navigateForward('/home');
  }

  onTwitter() {
    this.navCtrl.navigateForward('/home');
  }

  onGoogle() {
    this.navCtrl.navigateForward('/home');
  }
}
