import { Component } from '@angular/core';

import { NavController, Platform, AlertController, ToastController } from 'ionic-angular';
import { Providers } from '../../providers/provider';
import { AppService } from '../../providers/app-service';
import { StoreItemsPage } from '../storeItems/storeItems';
import { LocationMapPage } from '../location/location';
import { StoreDetailsPage } from '../storeDetails/storeDetails';
import { paymentScreen } from '../paymentScreen/paymentScreen';
import { RewardsOfferPage } from '../rewardOffer/rewardOffer';

@Component({
  selector: 'payment-cart',
  templateUrl: 'paymentCart.html'
})
export class PaymentCartPage {
  public selStore: any;
  public storeNameDet: any;
  public selStoreLength: any;
  public showDetails: any = false;
  public addCartDet: any;
  public cartItems: any;
  public navPage: any;
  travelMode: any = "DELIVERY";
  timeStarts: any = '07:43';
  itemDet: any = false;
  public notLength: any;
  public platFormType: any;
  public cartDetailsCopy: any;
  public summaryTotal: number = 0;
  public grandTotal: number = 0;
  public salesTax: number = 0;
  public tip: number = 0;
  public promoDiscount: number = 0;
  public redeemDet: any;
  public redeemDetLength: any;
  public offerDet: any;
  public offerDetLength: any;
  public verifyCode: number = 0;
  public verifyCheck: any = "CHECK";
  public codeText: any;
  public overlayAddress: any = true;
  public address: any;
  public state: any;
  public city: any;
  public phoneNumber: any;
  public newAddDet: any;
  constructor(public navCtrl: NavController, public api: Providers, public appService: AppService, public platform: Platform, public alertCtrl: AlertController, public toastCtrl: ToastController) {
    this.addCartDet = this.api.addCartItems;
    this.notLength = this.addCartDet.length;
    this.promoDiscount = this.api.promoDis;
    this.verifyCode = this.api.verifyDis;
    this.redeemDet = this.api.redeemItems;
    this.redeemDetLength = this.redeemDet.length;
    this.offerDet = this.api.offerItems;
    this.offerDetLength = this.offerDet.length;
    this.newAddDet = this.api.newAddress;
    if (this.newAddDet.length == 0) {
      this.newAddDet['length'] = 0;
    }
    else {
      this.newAddDet = this.api.newAddress;
      this.newAddDet = this.newAddDet[this.newAddDet.length - 1];
      this.newAddDet = [this.newAddDet];
    }
    if (this.api.verifyCodeTxt) {
      this.codeText = this.api.verifyCodeTxt;
      this.verifyCheck = this.api.checkRemoveCoupon;
    } else {
      this.verifyCheck = "CHECK";
    }

    console.log("dsad", JSON.stringify(this.redeemDetLength));
    console.log("dsad", JSON.stringify(this.redeemDet));
    console.log("dfsfsf", JSON.stringify(this.addCartDet));
    for (let data of this.addCartDet) {
      if (data.customize) {
        for (let subData of data.customize) {
          this.summaryTotal += subData.price;
        }
        this.summaryTotal += data.qty * data.price;
      } else {
        this.summaryTotal += data.qty * data.price;
      }
      console.log(this.summaryTotal);
    }
    this.grandTotal = this.summaryTotal + this.salesTax + this.tip + this.promoDiscount - this.verifyCode;
    this.showDetails = false;
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
  toNearbyStorepage() {
    this.navCtrl.push(LocationMapPage);
  }

  goToStoreItems() {
    this.navCtrl.push(StoreItemsPage);
  }

  showDet(data) {
    if (data == false) {
      this.showDetails = true;
    }
    else {
      this.showDetails = false;
    }

  }

  backToStoreDet() {
    this.navPage = this.api.navPaymentPage;
    if (this.navPage == 'StoreItems') {
      this.navCtrl.push(StoreItemsPage);
    }
    else {
      this.navCtrl.push(StoreDetailsPage);
    }
  }
  toPaymentScreen() {
    this.navCtrl.push(paymentScreen);
  }

  checkVerify(data) {
    this.api.verifyCodeTxt = data;
    let verifyCode = this.api.verificationCode;

    if (data) {
      let checkCode = verifyCode.filter(
        book => book == data);

      if (checkCode.length > 0) {
        this.verifyCode = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
        this.api.verifyDis = this.verifyCode;
        this.grandTotal = this.summaryTotal + this.salesTax + this.tip + this.promoDiscount - this.verifyCode;
        this.verifyCheck = "REMOVE";
        this.api.checkRemoveCoupon = this.verifyCheck;
      }
      else {
        let toast = this.toastCtrl.create({
          message: 'Please enter valid code.',
          duration: 3000,
          position: 'bottom'
        });
        toast.present(toast);
      }
    } else {
      let toast = this.toastCtrl.create({
        message: 'Please give code if you have.Without code you cannot get dicount.',
        duration: 3000,
        position: 'bottom'
      });
      toast.present(toast);
    }
  }

  removveVerifyCode(data) {
    let confirm = this.alertCtrl.create({
      title: 'Remove Item(s)',
      message: 'Are you sure? You want to remove this item(s)?',
      buttons: [
        {
          text: 'Ok',
          handler: () => {
            this.verifyCode = 0;
            this.api.verifyDis = this.verifyCode;
            this.grandTotal = this.summaryTotal + this.salesTax + this.tip + this.promoDiscount - this.verifyCode;
            this.verifyCheck = "CHECK";
            this.api.checkRemoveCoupon = this.verifyCheck;
            this.codeText = "";
            let toast = this.toastCtrl.create({
              message: 'Item Removed Successfully.',
              duration: 3000,
              position: 'bottom'
            });
            toast.present(toast);
          }
        },
        {
          text: 'Cancel',
          handler: () => {
            console.log(JSON.stringify(data));
          }
        }
      ]
    });
    confirm.present();
  }

  removeItems(data, index) {
    let confirm = this.alertCtrl.create({
      title: 'Remove Item(s)',
      message: 'Are you sure? You want to remove this item(s)?',
      buttons: [
        {
          text: 'Ok',
          handler: () => {
            // this.cartDetailsCopy = this.api.addCartItems.filter(
            //   book => book.size !== data.size || book.name !== data.name);
            this.api.addCartItems.splice(index, 1);
            this.cartDetailsCopy = this.api.addCartItems;
            let toast = this.toastCtrl.create({
              message: 'Item Removed Successfully.',
              duration: 3000,
              position: 'bottom'
            });
            toast.present(toast);
            // this.api.addCartItems = this.cartDetailsCopy;
            this.addCartDet = this.api.addCartItems;
            this.summaryTotal = 0;
            for (let data of this.addCartDet) {
              if (data.customize) {
                for (let subData of data.customize) {
                  this.summaryTotal += subData.price;
                }
                this.summaryTotal += data.qty * data.price;
              } else {
                this.summaryTotal += data.qty * data.price;
              }
              console.log(this.summaryTotal);
            }
            this.redeemDet = this.api.redeemItems[0];
            if (this.redeemDet) {
              this.api.promoDis = this.api.promoDis + this.redeemDet.rewardPrice;
              this.promoDiscount = this.api.promoDis;
              this.redeemDet.redeemFlag = false;
              this.api.redeemItems = this.redeemDet = [];
              this.redeemDetLength = this.redeemDet.length;
              this.grandTotal = this.summaryTotal + this.salesTax + this.tip + this.promoDiscount - this.verifyCode;
            } else {
              this.grandTotal = this.summaryTotal + this.salesTax + this.tip + this.promoDiscount - this.verifyCode;
            }
            this.notLength = this.addCartDet.length;
          }
        },
        {
          text: 'Cancel',
          handler: () => {
            console.log(JSON.stringify(data));
          }
        }
      ]
    });
    confirm.present();
  }

  applyReward() {
    this.api.rewardsPageNav = "Payment";
    console.log("ewrwr", this.api.rewardsPageNav);
    this.navCtrl.push(RewardsOfferPage);
  }

  removeOffer(item) {
    console.log("TEM", item);
    this.api.promoDis = this.api.promoDis + item.rewardPrice;
    this.promoDiscount = this.api.promoDis;
    item.redeemFlag = false;
    this.api.redeemItems = this.redeemDet = [];
    this.redeemDetLength = this.redeemDet.length;
    let toast = this.toastCtrl.create({
      message: 'Redeem Deleted Successfully.',
      duration: 3000,
      position: 'bottom'
    });
    toast.present(toast);
    this.grandTotal = this.summaryTotal + this.salesTax + this.tip + this.promoDiscount - this.verifyCode;
  }

  offerRedeemRemove(data) {
    this.api.promoDis = this.api.promoDis + data.offerPrice;
    this.promoDiscount = this.api.promoDis;
    data.redeemFlag = true;
    this.api.offerItems = this.offerDet = [];
    this.offerDetLength = this.offerDet.length;
    let toast = this.toastCtrl.create({
      message: 'Offer Deleted Successfully.',
      duration: 3000,
      position: 'bottom'
    });
    toast.present(toast);
    this.grandTotal = this.summaryTotal + this.salesTax + this.tip + this.promoDiscount - this.verifyCode;
  }

  selectAddress() {
    this.overlayAddress = false;
  }

  backToPayment() {
    if (this.newAddDet.length == 0) {
      this.newAddDet['length'] = 0;
    }
    else {
      this.newAddDet = this.api.newAddress;
      this.newAddDet = this.newAddDet[this.newAddDet.length - 1];
      this.newAddDet = [this.newAddDet];
    }
    this.overlayAddress = true;
  }

  deliveryAddress() {
    if (!this.address || !this.phoneNumber || !this.state || !this.city) {
      let toast = this.toastCtrl.create({
        message: 'Please enter all these Informations',
        duration: 3000,
        position: 'bottom'
      });
      toast.present(toast);
    } else {
      let newAddressDet = {
        "address": this.address,
        "phoneNumber": this.phoneNumber,
        "state": this.state,
        "city": this.city
      }
      this.api.newAddress.push(newAddressDet);
      let toast = this.toastCtrl.create({
        message: 'Address successfully addded',
        duration: 3000,
        position: 'bottom'
      });
      toast.present(toast);
    }
  }

}