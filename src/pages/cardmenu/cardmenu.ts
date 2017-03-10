import { Component } from '@angular/core';

import { NavController, NavParams, LoadingController, Platform, ToastController } from 'ionic-angular';
// import { LoadingController } from 'ionic-angular';
import { RestraFind } from '../restrafind/restrafind';
import { ListFavPage } from '../listfav/listfav';
import { Providers } from '../../providers/provider';
import { ItemDetailPage } from '../itemDetail/itemDetail';
import { LoginPage } from '../login/login';
import { RegistrationPage } from '../registration/registration';

@Component({
  selector: 'card-menu',
  templateUrl: 'cardmenu.html'
})
export class CardMenuPage {
  public platFormType: any;
  public overlay: any;
  restName: any;
  public matName: any;
  public restNameLength: any;
  public payCountLength: any;
  public payLength: any = 0;
  public storeId: any;
  public cardMenuDetails: any;
  public showSubMenuDet: any;
  public subMenuDetShow: any;
  public cardDetailsMenu: any;
  // private nav:NavController = null;
  constructor(public navCtrl: NavController, public params: NavParams, public loadingCtrl: LoadingController, public api: Providers, public platform: Platform, public toastCtrl: ToastController) {
    this.overlay = false;
    this.subMenuDetShow = false;
    // this.restName = params.get("restName");
    this.restNameLength = this.api.restName.length;
    this.restName = this.api.restName[this.restNameLength - 1]['restName'];
    this.storeId = this.api.restName[this.restNameLength - 1]['storeId'];
    this.cardMenuDetails = this.api.menuListDet.filter(
      book => book.store_id === this.storeId);
    console.log("CArdMEnu", JSON.stringify(this.cardMenuDetails));
    this.payCountLength = this.api.cartLength.length;
    this.payLength = this.api.cartLength;
    // console.log(this.restName);
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

  createAccount() {
    this.loadingCtrl.create({
      content: 'Please wait...',
      duration: 1000,
      // dismissOnPageChange: true
    }).present();
    //  this.navCtrl.setRoot(RestraFind);
  }

  public backToLocation() {
    this.loadingCtrl.create({
      content: 'Please wait...',
      duration: 1000,
      // dismissOnPageChange: true
    }).present();
    this.navCtrl.push(RestraFind);
  }

  listFav(data) {
    this.loadingCtrl.create({
      content: 'Please wait...',
      duration: 1000,
      // dismissOnPageChange: true
    }).present();
    this.navCtrl.push(ListFavPage, {
      'headerName': data
    });
  }
  showMenu() {
    this.overlay = true;
  }
  closeMenu() {
    this.overlay = false;
  }
  showCardDetails(data, subMenu) {
    // this.overlay = false;
    if (subMenu.length == 0) {
      this.matName = {
        "matDetails": data,
        "sub_menus": subMenu.length,
        "storeID": this.storeId
      }
      this.api.matName.push(this.matName);
      this.navCtrl.push(ItemDetailPage, {
        "storeName": this.restName,
        "matName": data
      });
    }
    else {
      this.showSubMenuDet = this.api.menuListDet.filter(
        book => book.store_id === data.store_id && book.menu_id === data.menu_id);
      this.cardMenuDetails = this.showSubMenuDet[0].sub_menus;
      this.cardDetailsMenu - this.showSubMenuDet[0];
      this.subMenuDetShow = true;
    }
  }
  showDetails(data, subMenu) {
    // console.log(this.restName);
    this.loadingCtrl.create({
      content: 'Please wait...',
      duration: 1000,
      // dismissOnPageChange: true
    }).present();
    this.matName = {
      "matDetails": data,
      "sub_menus": subMenu,
      "storeID": this.storeId
    }
    this.api.matName.push(this.matName);
    this.navCtrl.push(ItemDetailPage, {
      "storeName": this.restName,
      "matName": data
    });

  }
  showSubMenu(menu) {
    if (menu.sub_menus) {
      if (menu.expand) {
        menu.expand = false;
      } else {
        menu.expand = true;
      }
    }
  }
  changeStore() {
    this.navCtrl.push(RestraFind);
  }
  clickToLogin() {
    this.navCtrl.push(LoginPage);
  }
  clickToSignUp() {
    this.navCtrl.push(RegistrationPage);
  }
}
