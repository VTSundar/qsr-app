import { Component } from '@angular/core';

import { NavController, LoadingController, Platform, ToastController, NavParams } from 'ionic-angular';
import { CardMenuPage } from '../cardmenu/cardmenu';
import { Providers } from '../../providers/provider'
import { CheckoutPage } from '../checkout/checkout';

@Component({
  selector: 'page-item-detail',
  templateUrl: 'itemDetail.html'
})
export class ItemDetailPage {
  public ionScroll: any;
  qtySize: any;
  rate: any;
  cal: any;
  defQty: any;
  totRate: any;
  itemCartDetails: any;
  public restName: any;
  itemName: any;
  itemDetailsCart: any;
  sampleTest: any;
  public itemLength: any;
  public payLength: any = 0;
  public restNameLength: any;
  public cartLength: any;
  public payCountLength: any;
  public cartDetails: any;
  public cartDetailsLength: any;
  public totalQuantity: any = 0;
  constructor(public navCtrl: NavController, public params: NavParams, public platform: Platform, public loadingCtrl: LoadingController, public toastCtrl: ToastController, public api: Providers) {
    this.ionScroll = true;
    this.qtySize = 'Medium';
    this.rate = '5.74';
    this.cal = '540 CAL';
    this.defQty = 1;
    this.totRate = this.rate * this.defQty;
    this.restNameLength = this.api.restName.length;
    this.restName = this.api.restName[this.restNameLength - 1]['restName'];
    this.itemLength = this.api.matName.length;
    this.itemName = this.api.matName[this.itemLength - 1]['matName'];
    this.payCountLength = this.api.cartLength.length;
    this.payLength = this.api.cartLength[this.payCountLength - 1];
    // if(this.payCountLength){
    // }else{
    //   this.payLength = 'false';
    // }

  }

  backToCardMenu() {
    this.loadingCtrl.create({
      content: 'Please wait...',
      duration: 1000,
      // dismissOnPageChange: true
    }).present();
    this.navCtrl.push(CardMenuPage, {
      'restName': this.restName
    });
  }

  qtyBind(data) {
    if (data == 'Small') {
      this.qtySize = 'Small';
      this.rate = '4.74';
      this.cal = '320 CAL';
      this.defQty = 1;
      this.totRate = this.rate * this.defQty;
    }
    else if (data == 'Medium') {
      this.qtySize = 'Medium';
      this.rate = '5.74';
      this.cal = '540 CAL';
      this.defQty = 1;
      this.totRate = this.rate * this.defQty;
    }
    else {
      this.qtySize = 'Large';
      this.rate = '6.84';
      this.cal = '700 CAL';
      this.defQty = 1;
      this.totRate = this.rate * this.defQty;
    }
  }

  addQty(data) {
    if (data == 'add') {
      this.defQty = this.defQty + 1;
      if (this.defQty < 1) {
        this.defQty = 1;
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
    else {
      this.defQty = this.defQty - 1;
      if (this.defQty < 1) {
        this.defQty = 1;
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

  addToCart() {

    this.itemCartDetails =
      {
        "_id": "",
        "name": this.itemName,
        "size": this.qtySize,
        "quantity": this.defQty,
        "price": this.rate
      }

    this.cartDetails = this.api.itemDet.filter(
      book => book.size === this.qtySize);
    console.log(JSON.stringify(this.cartDetails));
    this.cartDetailsLength = this.cartDetails.length;
    if (this.cartDetailsLength > 0) {
      this.cartDetails = this.cartDetails.filter(
        book => book.name === this.itemName);
      for (let data of this.cartDetails) {
        this.totalQuantity = data.quantity + this.defQty;
        data.quantity = this.totalQuantity;
      }
      let toast = this.toastCtrl.create({
        message: 'Quantity Successfully updated to Cart',
        duration: 3000,
        position: 'bottom'
      });
      toast.present(toast);
    }
    else {
      this.api.itemDet.push(this.itemCartDetails);
      this.sampleTest = this.api.itemDet;
      this.payLength = this.sampleTest.length;
      this.api.cartLength.push(this.payLength);
      let toast = this.toastCtrl.create({
        message: 'Successfully added to Cart',
        duration: 3000,
        position: 'bottom'
      });
      toast.present(toast);
    }

  }

  goToCheckOut() {
    this.payCountLength = this.api.cartLength.length;
    if (this.payCountLength == 0) {
      let toast = this.toastCtrl.create({
        message: 'There is no item(s) in the cart.Pls add item',
        duration: 3000,
        position: 'bottom'
      });
      toast.present(toast);
    }
    else {
      this.navCtrl.push(CheckoutPage, {
        'checkCount': this.payLength,
        'storeName': this.restName
      });
    }

  }

}
