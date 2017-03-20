import { Component } from '@angular/core';

import { NavController, Platform, AlertController, ToastController } from 'ionic-angular';
import { Providers } from '../../providers/provider';
import { AppService } from '../../providers/app-service';
import { StoreItemsPage } from '../storeItems/storeItems';
import { LocationMapPage } from '../location/location';
import { StoreDetailsPage } from '../storeDetails/storeDetails';
import { paymentScreen } from '../paymentScreen/paymentScreen';
import { PaymentCartPage } from '../paymentCart/paymentCart';
import { MyCouponPage } from '../myCoupon/myCoupon';
import { DashboardPage } from '../dashboard/dashboard';

@Component({
  selector: 'rewards-offer',
  templateUrl: 'rewardOffer.html'
})
export class RewardsOfferPage {
  public selStore: any;
  public storeNameDet: any;
  public selStoreLength: any;
  public showDetails: any = false;
  public addCartDet: any;
  public cartItems: any;
  public navPage: any;
  travelMode: any = "DELIVERY";
  timeStarts: any = '07:43';
  itemDet: any = false;
  public notLength: any;
  public platFormType: any;
  public cartDetailsCopy: any;
  public summaryTotal: number = 0;
  public grandTotal: number = 0;
  public salesTax: number = 0;
  public tip: number = 0;
  public promoDiscount: number = 0;
  public rewardList: any;
  public rewardCount: any;
  public offerCount: any;
  public offerList: any;
  public hideOffer: any = false;
  public flag: any = false;
  public rewardsOffer: any = "Rewards";
  public rewardPageNav: any;
  constructor(public navCtrl: NavController, public api: Providers, public appService: AppService, public platform: Platform, public alertCtrl: AlertController, public toastCtrl: ToastController) {
    this.addCartDet = this.api.addCartItems;
    this.rewardList = this.api.rewardsList;
    this.rewardCount = this.rewardList.length;
    this.offerList = this.api.offerList;
    this.offerCount = this.api.offerList.length;
    this.rewardPageNav = this.api.rewardsPageNav;
    console.log("reawae", this.rewardPageNav);
    for (let data of this.offerList) {
      this.cartDetailsCopy = this.api.addCartItems.filter(
        book => book.name == data.offerItem);
      if (this.cartDetailsCopy.length > 0) {
        if (data.redeemFlag == "remove") {
          data.redeemFlag = "remove";
        } else {
          data.redeemFlag = true;
        }

      }
      else {
        data.redeemFlag = false;
      }
    }

    if (this.platform.is('android')) {
      this.platFormType = 'Mobile';
    }
    else if (this.platform.is('ios')) {
      this.platFormType = 'Ios';
    }
    else {
      this.platFormType = 'Windows';
    }
    this.rewardsList();
  }

  rewardsList() {
    this.hideOffer = false;
  }
  offersList() {
    this.hideOffer = true;
  }

  backToPaymentCart() {
    if(this.rewardPageNav == "Dashboard"){
      this.navCtrl.push(DashboardPage);
    }
    else{
      this.navCtrl.push(PaymentCartPage);
    }
    
  }

  redeemOffer(price, item) {
    if (this.api.offerItems.length > 0) {
      let toast = this.toastCtrl.create({
        message: 'You cannot avail both Offer and Redeem at a time. If you want this please remove Offer items',
        duration: 5000,
        position: 'bottom'
      });
      toast.present(toast);
    }
    else if(this.api.redeemItems.length >= 1){
      let toast = this.toastCtrl.create({
        message: 'You cannot avail 2 offers at a time. If you want this please remove previous Redeem items',
        duration: 5000,
        position: 'bottom'
      });
      toast.present(toast);
    }
    else {
      this.api.promoDis = this.api.promoDis - price;
      item.redeemFlag = true;
      this.api.redeemItems.push(item);
      let toast = this.toastCtrl.create({
        message: 'Redeem Successfully added.',
        duration: 3000,
        position: 'bottom'
      });
      this.navCtrl.push(PaymentCartPage);
      toast.present(toast);
    }

  }

  removeOffer(price, item) {
    this.api.promoDis = this.api.promoDis + price;
    item.redeemFlag = false;
    this.api.redeemItems = [];
    let toast = this.toastCtrl.create({
      message: 'Redeem Deleted Successfully.',
      duration: 3000,
      position: 'bottom'
    });
    toast.present(toast);
  }

  offerRedeem(data) {
    if (this.api.redeemItems.length > 0) {
      let toast = this.toastCtrl.create({
        message: 'You cannot avail both Offer and Redeem at a time. If you want this please remove Redeem items',
        duration: 5000,
        position: 'bottom'
      });
      toast.present(toast);
    }
    else if(this.api.offerItems.length >= 1){
      let toast = this.toastCtrl.create({
        message: 'You cannot avail 2 offers at a time. If you want this please remove previous Offer items',
        duration: 5000,
        position: 'bottom'
      });
      toast.present(toast);
    }
    else {
      this.api.promoDis = this.api.promoDis - data.offerPrice;
      data.redeemFlag = "remove";
      this.api.offerItems.push(data);
      let toast = this.toastCtrl.create({
        message: 'Offer Successfully added.',
        duration: 5000,
        position: 'bottom'
      });
      this.navCtrl.push(PaymentCartPage);
      toast.present(toast);
    }

  }

  offerRedeemRemove(data) {
    this.api.promoDis = this.api.promoDis + data.offerPrice;
    data.redeemFlag = true;
    this.api.offerItems = [];
    let toast = this.toastCtrl.create({
      message: 'Offer Deleted Successfully.',
      duration: 3000,
      position: 'bottom'
    });
    toast.present(toast);
  }

  gotoQR(data) {
    this.api.qrCodeItems = data;
    console.log("dsad",this.api.qrCodeItems);
    this.navCtrl.push(MyCouponPage);
  }
}