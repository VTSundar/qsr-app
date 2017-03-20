import { Component } from '@angular/core';

import { NavController, Platform, AlertController, ToastController } from 'ionic-angular';
import { Providers } from '../../providers/provider';
import { AppService } from '../../providers/app-service';
import { StoreItemsPage } from '../storeItems/storeItems';
import { LocationMapPage } from '../location/location';
import { StoreDetailsPage } from '../storeDetails/storeDetails';
import { paymentScreen } from '../paymentScreen/paymentScreen';
import { RewardsOfferPage } from '../rewardOffer/rewardOffer';
import { CardDesignPage } from '../cardDesign/cardDesign';

@Component({
  selector: 'card-amount',
  templateUrl: 'cardAmount.html'
})
export class CardAmountPage {
  public cardAmountList : any;
  public platFormType : any;
  public nextRedeemOffers : any;
  constructor(public navCtrl: NavController, public api: Providers, public appService: AppService, public platform: Platform, public alertCtrl: AlertController, public toastCtrl: ToastController) {
    this.cardAmountList = this.appService.cardAmountDet;
    appService.getNextRedeemOffer()
    .then(data => {
        this.nextRedeemOffers = data;
        console.log("this.nextRedeemOffers", this.nextRedeemOffers);
    })
    console.log(JSON.stringify(this.cardAmountList));
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

  goToCardDesign(){
      this.navCtrl.push(CardDesignPage);
  }
  
}