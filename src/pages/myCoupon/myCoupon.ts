import { Component } from '@angular/core';

import { NavController, Platform, AlertController, ToastController } from 'ionic-angular';
import { Providers } from '../../providers/provider';
import { AppService } from '../../providers/app-service';
import { StoreItemsPage } from '../storeItems/storeItems';
import { LocationMapPage } from '../location/location';
import { StoreDetailsPage } from '../storeDetails/storeDetails';
import { paymentScreen } from '../paymentScreen/paymentScreen';
import { PaymentCartPage } from '../paymentCart/paymentCart';
import { RewardsOfferPage } from '../rewardOffer/rewardOffer';

@Component({
  selector: 'my-coupon',
  templateUrl: 'myCoupon.html'
})
export class MyCouponPage {
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
  public qrCodeItems : any;
  constructor(public navCtrl: NavController, public api: Providers, public appService: AppService, public platform: Platform, public alertCtrl: AlertController, public toastCtrl: ToastController) {
    this.qrCodeItems = this.api.qrCodeItems;
    this.addCartDet = this.api.addCartItems;
    this.rewardList = this.api.rewardsList;
    this.rewardCount = this.rewardList.length;
    this.offerList = this.api.offerList;
    this.offerCount = this.api.offerList.length;
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
    this.navCtrl.push(PaymentCartPage);
  }

  backToRewardsPage(){
    this.navCtrl.push(RewardsOfferPage);
  }

}