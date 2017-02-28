import { Component } from '@angular/core';

import { NavController, LoadingController } from 'ionic-angular';

@Component({
  selector: 'payment-screen',
  templateUrl: 'paymentScreen.html'
})
export class PaymentPage {
  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController) {
  }
}
