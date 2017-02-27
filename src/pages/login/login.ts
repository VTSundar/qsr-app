import { Component } from '@angular/core';

import { NavController, LoadingController } from 'ionic-angular';

import { RegistrationPage } from '../registration/registration';

import { StartscreenPage } from '../startscreen/startscreen';
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController) {

  }
  public regPage(){
    this.loadingCtrl.create({
      content: 'Please wait...',
      duration: 3000,
      // dismissOnPageChange: true
    }).present();
    this.navCtrl.push(RegistrationPage);
  }
  public startupPage(){
     this.loadingCtrl.create({
      content: 'Please wait...',
      duration: 3000,
      // dismissOnPageChange: true
    }).present();
    this.navCtrl.push(StartscreenPage);
  }
}
