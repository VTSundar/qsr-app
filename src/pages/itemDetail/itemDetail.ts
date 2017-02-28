import { Component } from '@angular/core';

import { NavController, LoadingController, Platform, ToastController  } from 'ionic-angular';
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
  defQty : any;
  totRate : any;
  constructor(public navCtrl: NavController, public platform: Platform, public loadingCtrl: LoadingController,public toastCtrl: ToastController) {
    this.ionScroll = true;
    this.qtySize = 'Medium';
      this.rate = '5.74';
      this.cal = '540 CAL';
      this.defQty = 2;
      this.totRate = this.rate * this.defQty;
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
      this.rate = '4.74';
      this.cal = '320 CAL';
      this.defQty = 2;
      this.totRate = this.rate * this.defQty;
    }
    else if(data == 'Medium'){
      this.qtySize = 'Medium';
      this.rate = '5.74';
      this.cal = '540 CAL';
      this.defQty = 2;
      this.totRate = this.rate * this.defQty;
    }
    else{
      this.qtySize = 'Large';
      this.rate = '6.84';
      this.cal = '700 CAL';
      this.defQty = 2;
      this.totRate = this.rate * this.defQty;
    }
  }
  
  addQty(data){
    if(data == 'add'){
      this.defQty = this.defQty + 1;
       if(this.defQty < 0){
        this.defQty = 0;
        let toast = this.toastCtrl.create({
      message: 'You cannot enter less than 0... Please add Quantity',
      duration: 3000,
      position: 'bottom'
    });
    toast.present(toast);
        return;
      }
      this.totRate = this.rate * this.defQty;
    }
    else{
      this.defQty = this.defQty - 1;
      if(this.defQty < 0){
        this.defQty = 0;
        let toast = this.toastCtrl.create({
      message: 'You cannot enter less than 0... Please add Quantity',
      duration: 3000,
      position: 'bottom'
    });
    toast.present(toast);
        return;
      }
      this.totRate = this.rate * this.defQty;
    }
  }

  addToCart(){
    let toast = this.toastCtrl.create({
      message: 'Successfully added to Cart',
      duration: 3000,
      position: 'bottom'
    });

    toast.present(toast);
  }

}
