import { Component } from '@angular/core';
import { NavController, Platform, ToastController } from 'ionic-angular';
import { Providers } from '../../providers/provider';
import { AppService } from '../../providers/app-service';
import { StartScreenPage } from '../startscreen/startscreen';
import { LocationMapPage } from '../location/location';
import { ListStores } from '../listStores/listStores';
@Component({
  selector: 'store-location',
  templateUrl: 'storeLocation.html'
})
export class StoreLocation {
  public platFormType: any;
  public zipCode: any;
  public getStoreDetails: any;
  public state : any;
  public city : any;
  constructor(public navCtrl: NavController, public api: Providers, public appService: AppService, public platform: Platform, public toastCtrl: ToastController) {
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
  gotoStartScreen() {
    this.navCtrl.push(StartScreenPage);
  }
  gotoMapScreen() {
    this.appService.navPageDetail = "NearByStores";
    this.navCtrl.push(LocationMapPage);
  }
  gotoListStoreScreen() {
    this.navCtrl.push(ListStores);
  }

  searchZipCode(item) {
    if (item || this.city || this.state) {
      this.appService.getStoreList()
        .then(data => {
          this.getStoreDetails = data;
          console.log("dasd", this.getStoreDetails); //qsr_zip
          let storeDetZip = this.getStoreDetails.filter(
            book => book.qsr_zip == item || book.qsr_city == this.city || book.qsr_state == this.state);
          console.log("ZIP", JSON.stringify(storeDetZip));
          if (storeDetZip.length == 0) {
            let toast = this.toastCtrl.create({
              message: 'Sorry no stores found',
              duration: 3000,
              position: 'bottom'
            });
            toast.present(toast);
          }
          else {
            this.appService.navPageDetail = "Search";
            this.appService.mapDetailList = storeDetZip;
            this.navCtrl.push(LocationMapPage);
          }

          // this.getRandomNumber(1,10);
        });
    }
    else {
      let toast = this.toastCtrl.create({
        message: 'Please enter Zipcode / City / State',
        duration: 3000,
        position: 'bottom'
      });
      toast.present(toast);
    }


  }
}