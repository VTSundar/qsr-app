import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AppService } from '../../providers/app-service';
import { Providers } from '../../providers/provider';
import { StoreItemsPage } from '../storeItems/storeItems';
import { StoreSubmenuPage } from '../storeSubmenu/storeSubmenu';

@Component({
  selector: 'page-store-main-menu',
  templateUrl: 'storeMainMenu.html'
})
export class StoreMainMenuPage {
  public mainMenus: any;
  constructor(public navCtrl: NavController, public appService: AppService) {
    appService.getProductFamily()
      .then(data => {
        this.mainMenus = data;
      });
  }
  goBack(){
    this.navCtrl.push(StoreItemsPage,{ animate: true, direction: 'back'});
  }
  selectFamily(family){
    this.appService.selectedFamily = family;
    this.navCtrl.push(StoreSubmenuPage,{ animate: true, direction: 'back'});
  }
}
