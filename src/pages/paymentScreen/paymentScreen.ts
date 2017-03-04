import { Component } from '@angular/core';

import { NavController, LoadingController, Platform , NavParams, AlertController} from 'ionic-angular';
import { CheckoutPage } from '../checkout/checkout';
@Component({
  selector: 'payment-screen',
  templateUrl: 'paymentScreen.html'
})
export class PaymentPage {
    public platFormType : any;
    public checkOutPay : any;
    public storeName : any;
    public total : any;
  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController,public platform: Platform, public params:NavParams, public alertCtrl:AlertController) {
    this.checkOutPay = params.get("checkOutPayment");
    this.storeName = params.get("storeName");
    this.total = params.get("total");
  if (this.platform.is('android')) {
     this.platFormType = 'Mobile';
   }
   else if(this.platform.is('ios')){
     this.platFormType = 'Ios';
   }
   else{
        this.platFormType = 'Windows';
   }
  //  console.log(this.platFormType);
  }
  backToStartPage(){
    this.navCtrl.push(CheckoutPage,{
      "checkOutPayment" : this.checkOutPay,
      "storeName" : this.storeName,
      "total" : this.total
    });
  }
  payClick(){
    let alert = this.alertCtrl.create({
      title: 'Payment Successful',
      subTitle: 'Your Payment is made Successfully!!!',
      buttons: ['OK']
    });
    alert.present();
  }
}
