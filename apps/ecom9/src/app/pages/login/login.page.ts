import { Component, OnInit } from '@angular/core';
import { LoginPayload } from '@ecom9/models';

import { Store, select } from '@ngrx/store';
import * as fromStore from '../../store';
import * as fromAuth from '../../store/auth';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'ecom9-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage implements OnInit {
  pending$ = this.store.pipe(select(fromAuth.authPageSelectors.getPending));
  error$ = this.store.pipe(select(fromAuth.authPageSelectors.getError));

  constructor(
    private store: Store<fromStore.State>,
    private navCtrl: NavController,
  ) { }

  ngOnInit() { }

  skip() {
    this.navCtrl.navigateForward('/home');
  }

  signin(payload: LoginPayload) {
    this.store.dispatch(new fromAuth.authActions.AuthLogin({ user: payload }));
  }

  signup() {
    this.navCtrl.navigateForward('signup');
  }

  forgot() {
    this.navCtrl.navigateForward('forgot');
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
