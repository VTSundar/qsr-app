import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Platform } from 'ionic-angular';
import { DashboardPage } from '../dashboard/dashboard';
import { Providers } from '../../providers/provider';
import { AppService } from '../../providers/app-service';

@Component({
  selector: 'page-my-loyalty',
  templateUrl: 'myLoyalty.html'
})
export class myLoyaltyPage {
    platformName : any;
    nextRedeemOffers: any;
  constructor(public navCtrl: NavController, public appService: AppService, public plt: Platform , public provider:Providers) {
    if(plt.is('ios')){
        this.platformName = 'ios';
    }else if(plt.is('android')){
        this.platformName = 'android';
    }else{
        this.platformName = 'windows';
    }
    appService.getNextRedeemOffer()
    .then(data => {
        this.nextRedeemOffers = data;
        console.log("this.nextRedeemOffers", this.nextRedeemOffers);
    })
    .catch(err => {

    });
  }
  goBack(){
    this.navCtrl.push(DashboardPage,{ animate: true, direction: 'back'});
  }
}
