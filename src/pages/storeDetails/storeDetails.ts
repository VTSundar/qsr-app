import { Component } from '@angular/core';

import { NavController, NavParams, ToastController, Platform } from 'ionic-angular';
import { Providers } from '../../providers/provider';
import { LoginPage } from '../login/login';
import { SignupPage } from '../signup/signup';
import { StoreItemsPage } from '../storeItems/storeItems';
import { CustomizationPage } from '../customizationList/customizationList';
import { AppService } from '../../providers/app-service';
import { PaymentCartPage } from '../paymentCart/paymentCart';

@Component({
  selector: 'store-details',
  templateUrl: 'storeDetails.html'
})
export class StoreDetailsPage {
  public startScreenInfo: any;
  public storeDet: any;
  public customOverlay: any = true;
  public customizeItem: any;
  public storeDetLength: any;
  public subItem: any;
  public customSubMenu: any = false;
  public customSubItem: any = false;
  brightness: number = 20;
  contrast: number = 0;
  warmth: number = 1;
  structure: any = { lower: 33, upper: 60 };
  text: number = 0;
  public defQty: number = 1;
  ingredientsList: any = "NUTRITIONAL";
  public notLength: number = 0;
  public cartDetails: any;
  public cartDetailsLength: any;
  public platFormType : any;
  public cusSubItem: any;
  public newCourse : any;
  public newSubItem : any;
  constructor(public navCtrl: NavController, public api: Providers, public appService: AppService, public params: NavParams, public toastCtrl: ToastController, public platform: Platform) {
    appService.getCustomize()
      .then(data => {
        this.customizeItem = data;
        console.log("customizeItems", this.customizeItem);
      });
    this.storeDetLength = this.api.storeItemDetails.length;
    this.notLength = this.api.addCartItems.length;
    console.log(this.storeDetLength);
    this.storeDet = this.api.storeItemDetails;
    this.newCourse = Object.assign({}, this.storeDet);
    this.newSubItem = Object.assign({}, this.cusSubItem);
    this.customizeItem = this.appService.customizeItems;
    if (this.platform.is('android')) {
      this.platFormType = 'Mobile';
    }
    else if (this.platform.is('ios')) {
      this.platFormType = 'Ios';
    }
    else {
      this.platFormType = 'Windows';
    }
    console.log(this.platFormType);
  }


  gotoLogin() {
    this.navCtrl.push(LoginPage);
  }

  gotoSignupPg() {
    this.navCtrl.push(SignupPage);
  }

  gotoMenuItems() {
    this.navCtrl.push(StoreItemsPage);
  }

  addQty(data) {
    if (data == 'add') {
      this.defQty = this.defQty + 1;
      if (this.defQty < 1) {
        this.defQty = 1;
        let toast = this.toastCtrl.create({
          message: 'You cannot enter less than 0... Please add Quantity',
          duration: 3000,
          position: 'bottom'
        });
        toast.present(toast);
        return;
      }
      else if (this.defQty > 10) {
        this.defQty = 10;
        let toast = this.toastCtrl.create({
          message: 'You cannot enter greater than 10 Quantity.',
          duration: 3000,
          position: 'bottom'
        });
        toast.present(toast);
        return;
      }
    }
    else {
      this.defQty = this.defQty - 1;
      if (this.defQty < 1) {
        this.defQty = 1;
        let toast = this.toastCtrl.create({
          message: 'You cannot enter less than 0... Please add Quantity',
          duration: 3000,
          position: 'bottom'
        });
        toast.present(toast);
        return;
      }
    }
  }

  backToItemPage() {
    this.navCtrl.push(StoreItemsPage, {}, { animate: true, direction: 'back' });
  }

  addCart() {
    this.newCourse['size'] = this.warmth;
    this.newCourse['qty'] = this.defQty;
    if(this.warmth == 0){
        this.newCourse.price = this.newCourse.price - 1;
    }
    else if(this.warmth == 2){
      this.newCourse.price = this.newCourse.price + 1;
    }
    else{
      this.newCourse.price = this.newCourse.price;
    }
    this.api.addCartItems.push(this.newCourse);
    this.notLength = this.api.addCartItems.length;
    this.newCourse = this.storeDet;
    this.appService.customizeSubItems = [];
    let toast = this.toastCtrl.create({
      message: 'Successfully added to Cart',
      duration: 3000,
      position: 'bottom'
    });
    toast.present(toast);
  }
  showcustomizePage(data) {
    this.customOverlay = false;
  }
  addToPayment() {
    this.api.navPaymentPage = 'StoreDetails';
    this.navCtrl.push(PaymentCartPage);
  }
  itemSelected(item) {
    if (!item.collapse) {
      item.collapse = true;
    } else {
      item.collapse = false;
    }
  }
  subitemSelected(subitem) {
    if (!subitem.tick) {
      subitem.tick = true;
    } else {
      subitem.tick = false;
    }
    this.appService.customizeSubItems.push(subitem);
    this.cusSubItem = this.appService.customizeSubItems;
    this.newSubItem = this.cusSubItem;
  }
  backPage() {
    this.customOverlay = true;
  }
  applyCustomization(){
    this.customOverlay = true;
    if(this.newCourse['customize']){
      this.newCourse['customize'] = [];
      this.newCourse['customize'] = this.newSubItem;
    }
    else{
      this.newCourse['customize'] = this.newSubItem;
    }
    console.log("storeDet", JSON.stringify(this.newCourse));
    // this.api.addCartItems.push(this.storeDet);
  }
}