import { Component } from '@angular/core';

import { NavController , LoadingController } from 'ionic-angular';
// import { LoadingController } from 'ionic-angular';
 import { RestraFind } from '../restrafind/restrafind';
 import { ListFavPage } from '../listfav/listfav';

@Component({
  selector: 'select-menu',
  templateUrl: 'selectmenu.html'
})
export class SelectMenuPage {
// private nav:NavController = null;
  constructor(public navCtrl: NavController , public loadingCtrl: LoadingController) {}

  createAccount(){
    this.loadingCtrl.create({
      content: 'Please wait...',
      duration: 3000,
      // dismissOnPageChange: true
    }).present();
      //  this.navCtrl.setRoot(RestraFind);
    }

    public backToLocation(){
       this.loadingCtrl.create({
      content: 'Please wait...',
      duration: 3000,
      // dismissOnPageChange: true
    }).present();
      this.navCtrl.push(RestraFind);
    }

    listFav(){
      this.loadingCtrl.create({
      content: 'Please wait...',
      duration: 3000,
      // dismissOnPageChange: true
    }).present();
    this.navCtrl.push(ListFavPage);
    }
  

}
