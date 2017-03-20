import { Component } from '@angular/core';

import { NavController, Platform } from 'ionic-angular';
import { AppService } from '../../providers/app-service';
import { PaymentCartPage } from '../paymentCart/paymentCart';

@Component({
  selector: 'payment-screen',
  templateUrl: 'paymentScreen.html'
})
export class paymentScreen {
  paymentCardLists: any;
  public platFormType : any;
  constructor(public navCtrl: NavController, public appService: AppService,public platform: Platform) {
    this.appService.getPaymentCard()
    .then(data => {
      this.paymentCardLists = data;
    })
    .catch(err =>{
      console.log("err", err);
    });
    console.log(this.platform);
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

  // /**
  //  * payment Done
  //  */
  payDone(){
    
  }
  backtoCart(){
    this.navCtrl.push(PaymentCartPage);
  }
}