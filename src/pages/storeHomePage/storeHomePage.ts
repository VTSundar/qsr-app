import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { HeaderPage } from '../header/header';
import { StoreItemsPage } from '../storeItemsPage/storeItemsPage';

@Component({
  selector: 'page-store-home-page',
  templateUrl: 'storeHomePage.html'
})
export class storeHomePage {
  rootPage = HeaderPage;
  constructor(public navCtrl: NavController) {

  }
  firstPage(event){
    this.rootPage = HeaderPage;
  }
  secondPage(event){
    this.rootPage = StoreItemsPage;
  }
  backToHome(event){
      this.navCtrl.popToRoot();
  }

}