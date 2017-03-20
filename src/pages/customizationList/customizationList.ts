import { Component } from '@angular/core';

import { NavController, NavParams, ToastController } from 'ionic-angular';
import { Providers } from '../../providers/provider';
import { LoginPage } from '../login/login';
import { SignupPage } from '../signup/signup';
import { StoreItemsPage } from '../storeItems/storeItems';

@Component({
  selector: 'customization-page',
  templateUrl: 'customizationList.html'
})
export class CustomizationPage {
  public startScreenInfo: any;
  public storeDet: any;
  brightness: number = 20;
  contrast: number = 0;
  warmth: number = 1;
  structure: any = { lower: 33, upper: 60 };
  text: number = 0;
  public defQty: number = 1;
  public storeDetLength: any;
  ingredientsList: any = "NUTRITIONAL";
  public notLength : number = 0;
  public cartDetails : any;
  public cartDetailsLength : any;
  constructor(public navCtrl: NavController, public api: Providers, public params: NavParams, public toastCtrl: ToastController) {
    this.storeDetLength = this.api.storeItemDetails.length;
    this.notLength = this.api.addCartItems.length;
    console.log(this.storeDetLength);
    this.storeDet = this.api.storeItemDetails[this.storeDetLength - 1];
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
    this.navCtrl.push(StoreItemsPage);
  }

  addCart(){
    let addCartDet = {
      "storeDet" : this.storeDet,
      "size" : this.warmth,
      "qty" : this.defQty
    }
    this.cartDetails = this.api.addCartItems.filter(
      book => book.size === this.warmth && book.storeDet.name === this.storeDet.name);
      this.cartDetailsLength = this.cartDetails.length;
    if (this.cartDetailsLength > 0) {
      let toast = this.toastCtrl.create({
        message: 'Quantity Successfully updated to Cart',
        duration: 3000,
        position: 'bottom'
      });
      toast.present(toast);
    }
    else {
      this.api.addCartItems.push(addCartDet);
      console.log(JSON.stringify(this.api.addCartItems));
      this.notLength = this.api.addCartItems.length;
      console.log(this.notLength);
      let toast = this.toastCtrl.create({
        message: 'Successfully added to Cart',
        duration: 3000,
        position: 'bottom'
      });
      toast.present(toast);
    }
    
    
  }

}
