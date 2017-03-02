import { Component } from '@angular/core';

import { NavController, LoadingController, Platform } from 'ionic-angular';

@Component({
  selector: 'payment-screen',
  templateUrl: 'paymentScreen.html'
})
export class PaymentPage {
    public platFormType : any;
  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController,public platform: Platform) {
  if (this.platform.is('android')) {
     this.platFormType = 'Mobile';
   }
   else if(this.platform.is('ios')){
     this.platFormType = 'Ios';
   }
   else{
        this.platFormType = 'Windows';
   }
   console.log(this.platFormType);
  }
}
