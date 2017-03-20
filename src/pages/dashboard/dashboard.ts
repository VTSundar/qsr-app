import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { Platform } from 'ionic-angular';
import { StoreItemsPage } from '../storeItems/storeItems';
import { StoreMainMenuPage } from '../storeMainMenu/storeMainMenu';
import { RewardsOfferPage } from '../rewardOffer/rewardOffer';
import { myLoyaltyPage } from '../myLoyalty/myLoyalty';
import { Providers } from '../../providers/provider';
import { AppService } from '../../providers/app-service';
import { Profile } from '../../pages/profile/profile';

@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html'
})
export class DashboardPage {
    platformName : any;
    rewardsOfferCount: number;
  constructor(public navCtrl: NavController, public api: AppService, public plt: Platform , public provider:Providers, public loadingCtrl: LoadingController) {
    
    if(plt.is('ios')){
        this.platformName = 'ios';
    }else if(plt.is('android')){
        this.platformName = 'android';
    }else{
        this.platformName = 'windows';
    }
    this.rewardsOfferCount = (provider.rewardsList.length + provider.offerList.length);
  }
  goBack(){
     this.loadingCtrl.create({
        content: 'Please wait...',
        duration: 3000,
        // dismissOnPageChange: true
        }).present();
    this.navCtrl.push(StoreItemsPage,{ animate: true, direction: 'back'});
  }
  goToMainMenu(){
     this.loadingCtrl.create({
        content: 'Please wait...',
        duration: 3000,
        // dismissOnPageChange: true
        }).present();
    this.navCtrl.push(StoreMainMenuPage,{ animate: true, direction: 'forward'});
  }

  rewardsOffer(){
    this.provider.rewardsPageNav = "Dashboard";
      this.navCtrl.push(RewardsOfferPage);
  }

  gotoProfilePage(){
    this.navCtrl.push(Profile);
  }

  myLoyalty(){
    this.navCtrl.push(myLoyaltyPage);
  }

}
