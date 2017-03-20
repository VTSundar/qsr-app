import { Component } from '@angular/core';

import { NavController, Platform, AlertController, ToastController } from 'ionic-angular';
import { Providers } from '../../providers/provider';
import { AppService } from '../../providers/app-service';
import { StoreItemsPage } from '../storeItems/storeItems';
import { LocationMapPage } from '../location/location';
import { StoreDetailsPage } from '../storeDetails/storeDetails';
import { paymentScreen } from '../paymentScreen/paymentScreen';
import { RewardsOfferPage } from '../rewardOffer/rewardOffer';
import { CardAmountPage } from '../cardAmount/cardAmount';

@Component({
  selector: 'card-design',
  templateUrl: 'cardDesign.html'
})
export class CardDesignPage {
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
  public redeemDet: any;
  public redeemDetLength: any;
  public offerDet: any;
  public offerDetLength: any;
  public verifyCode: number = 0;
  public verifyCheck: any = "CHECK";
  public codeText: any;
  public overlayAddress: any = true;
  public address: any;
  public state: any;
  public city: any;
  public phoneNumber: any;
  public newAddDet: any;
  public giftCardList : any;
  public cardDesign : any;
  constructor(public navCtrl: NavController, public api: Providers, public appService: AppService, public platform: Platform, public alertCtrl: AlertController, public toastCtrl: ToastController) {
    appService.cardDesignList()
      .then(data => {
        this.cardDesign = data;
      });
        if (this.platform.is('android')) {
      this.platFormType = 'Mobile';
    }
    else if (this.platform.is('ios')) {
      this.platFormType = 'Ios';
    }
    else {
      this.platFormType = 'Windows';
    }
  }

  cardDesignClick(data){
    this.appService.cardAmountDet = data;
    this.navCtrl.push(CardAmountPage);

  }
  
}