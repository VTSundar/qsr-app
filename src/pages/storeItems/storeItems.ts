import { Component } from '@angular/core';

import { NavController, NavParams, ToastController } from 'ionic-angular';
import { StartScreenPage } from '../startscreen/startscreen';
import { Providers } from '../../providers/provider';
import { StoreDetailsPage } from '../storeDetails/storeDetails';
import { AppService } from '../../providers/app-service';
import { StoreSubmenuPage } from '../storeSubmenu/storeSubmenu';
import { PaymentCartPage } from '../paymentCart/paymentCart';
import { DashboardPage } from '../dashboard/dashboard';

@Component({
  selector: 'store-items',
  templateUrl: 'storeItems.html'
})
export class StoreItemsPage {
  public storeItemDet: any;
  public mainMenu: any;
  public productList: any;
  public notLength: number = 0;
  public cartDetails: any;
  public cartDetailsLength: any;
  randomNumberInstance: any;
  count: any = 0;
  public prodLength: any;
  items = [];
  public mainMenus: any;
  public menuOverlay: boolean = true;

  constructor(public navCtrl: NavController, public api: Providers, public params: NavParams, public appService: AppService, public toastCtrl: ToastController) {
    this.notLength = this.api.addCartItems.length;
    this.storeItemDet = this.api.storeItemsDet;
    appService.getProductFamily()
      .then(data => {
        this.mainMenus = data;
      });
    appService.getProduct()
      .then(data => {
        this.productList = data;
        for (let prod of this.productList) {
          prod['price'] = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
        }
        console.log("productList", this.productList);
        // this.getRandomNumber(1,10);
      });

  }

  //   getRandomNumber() {
  //     //  let value1 = 1;
  //     //  let value2 = 10;
  //      let result = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
  //     // let val = this.count++;
  //     return 1;
  // }

  startupPage() {
    this.navCtrl.push(StartScreenPage, {}, { animate: true, direction: 'back' });
  }

  storeDet(data) {
    this.api.storeItemDetails = data;
    this.navCtrl.push(StoreDetailsPage, {}, { animate: true, direction: 'forward' });
  }

  doInfinite(infiniteScroll) {
    console.log('Begin async operation');

    setTimeout(() => {
      for (let i = 0; i < 30; i++) {
        this.productList.push(this.productList.length);
      }

      console.log('Async operation has ended');
      infiniteScroll.complete();
    }, 500);
  }

  addCart(data) {
    data['size'] = 1;
    data['qty'] = 1;
      this.api.addCartItems.push(data);
      this.notLength = this.api.addCartItems.length;
      let toast = this.toastCtrl.create({
        message: 'Successfully added to Cart',
        duration: 3000,
        position: 'bottom'
      });
      toast.present(toast);

  }
  showMenu(){
    // this.menuOverlay = false;
    this.navCtrl.push(DashboardPage,{ animate: true, direction: 'forward'});
  }
  hideMenu(){
    this.menuOverlay = true;
  }
  selectFamily(family){
    this.appService.selectedFamily = family;
    this.navCtrl.push(StoreSubmenuPage,{ animate: true, direction: 'back'});
  }
  addToPayment(){
    this.api.navPaymentPage = 'StoreItems';
    this.navCtrl.push(PaymentCartPage);
  }
}