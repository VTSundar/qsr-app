import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { Providers } from '../../providers/provider';
import { LoginPage } from '../login/login';
import { SignupPage } from '../signup/signup';
import { StoreItemsPage } from '../storeItems/storeItems';
import { LocationMapPage } from '../location/location';
import { AppService } from '../../providers/app-service';
import { StoreLocation } from '../storeLocation/storeLocation'
@Component({
  selector: 'start-screen',
  templateUrl: 'startscreen.html'
})
export class StartScreenPage {
  public startScreenInfo : any;
  constructor(public navCtrl: NavController, public api: Providers, public appService: AppService) {
    this.startScreenInfo = this.api.startScreenInfo;
    this.appService.getStoreList();
  }

  gotoLogin(){
    this.navCtrl.push(LoginPage);
  }

  gotoSignupPg(){
    this.navCtrl.push(SignupPage);
  }

  gotoMenuItems(){
    this.navCtrl.push(StoreLocation);
  }
  gotoMapScreen(){
    this.appService.navPageDetail = "NearByStores";
    this.navCtrl.push(LocationMapPage);
  }
}