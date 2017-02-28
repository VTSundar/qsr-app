import { Component } from '@angular/core';

import { NavController, LoadingController, Platform } from 'ionic-angular';
import { CardMenuPage } from '../cardmenu/cardmenu';

@Component({
  selector: 'page-item-detail',
  templateUrl: 'itemDetail.html'
})
export class ItemDetailPage {
  public ionScroll : any;
  qtySize : any;
  rate : any;
  cal : any;
  constructor(public navCtrl: NavController, public platform: Platform, public loadingCtrl: LoadingController,) {
    this.ionScroll = true;
    this.qtySize = 'Medium';
      this.rate = '$5.74';
      this.cal = '540 CAL';
  }

  backToCardMenu(){
    this.loadingCtrl.create({
      content: 'Please wait...',
      duration: 3000,
      // dismissOnPageChange: true
    }).present();
    this.navCtrl.push(CardMenuPage);
  }

  qtyBind(data){
    if(data == 'Small'){
      this.qtySize = 'Small';
      this.rate = '$4.74';
      this.cal = '320 CAL';
    }
    else if(data == 'Medium'){
      this.qtySize = 'Medium';
      this.rate = '$5.74';
      this.cal = '540 CAL';
    }
    else{
      this.qtySize = 'Large';
      this.rate = '$6.84';
      this.cal = '700 CAL';
    }
  }

}
