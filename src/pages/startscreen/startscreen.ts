import { Component } from '@angular/core';

import { NavController,LoadingController } from 'ionic-angular';

import { RestraFind } from '../restrafind/restrafind';

import { LoginPage } from '../login/login';

import { RegistrationPage } from '../registration/registration';

@Component({
  selector: 'page-start-screen',
  templateUrl: 'startscreen.html'
})
export class StartscreenPage {

  constructor(public navCtrl: NavController,public loadingCtrl: LoadingController) {

  }

  public createAccount(){
    this.loadingCtrl.create({
      content: 'Please wait...',
      duration: 1000,
      // dismissOnPageChange: true
    }).present();
        this.navCtrl.push(RestraFind);
    }
    public gotoLogin(){
        this.navCtrl.push(LoginPage);
    }
    public gotoSignupPg(){
        this.navCtrl.push(RegistrationPage);
    }
}