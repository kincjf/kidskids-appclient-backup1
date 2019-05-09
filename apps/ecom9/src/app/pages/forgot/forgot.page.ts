import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'ecom9-forgot',
  templateUrl: './forgot.page.html',
  styleUrls: ['./forgot.page.scss']
})
export class ForgotPage implements OnInit {
  constructor(
    private navCtrl: NavController,
  ) { }

  ngOnInit() { }

  onRegister() {
    this.navCtrl.navigateForward('/signup');
  }

  onSubmit() {

  }
}
