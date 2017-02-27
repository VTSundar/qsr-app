import { Component } from '@angular/core';

import { NavController, LoadingController } from 'ionic-angular';

import { LoginPage } from '../login/login';

@Component({
  selector: 'page-registration',
  templateUrl: 'registration.html'
})
export class RegistrationPage {

  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController) {

  }
    public signinPage(){
    this.loadingCtrl.create({
      content: 'Please wait...',
      duration: 3000,
      // dismissOnPageChange: true
    }).present();
    this.navCtrl.push(LoginPage);
  }
}
