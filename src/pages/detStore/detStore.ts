import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { Providers } from '../../providers/provider';
import { AppService } from '../../providers/app-service';
import { StoreItemsPage } from '../storeItems/storeItems';
import { LocationMapPage } from '../location/location';
@Component({
  selector: 'det-store',
  templateUrl: 'detStore.html'
})
export class detStore {
  public selStore: any;
  public storeNameDet: any;
  public selStoreLength: any;
  travelMode : any = "PICK UP"
  constructor(public navCtrl: NavController, public api: Providers, public appService: AppService) {
    this.selStore = this.api.selectedStore;
    console.log("selectedStoreLength",this.selStore.length);
    this.selStoreLength = this.selStore.length;
    this.selStore = this.selStore[this.selStoreLength - 1];
    console.log("selectedStoreLengthnext",JSON.stringify(this.selStore));
  }
  toNearbyStorepage(){
    this.navCtrl.push(LocationMapPage);
  }

  goToStoreItems(){
    this.navCtrl.push(StoreItemsPage);
  }
}