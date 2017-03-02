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
    this.navCtrl.push(LoginPage);
  }
}
