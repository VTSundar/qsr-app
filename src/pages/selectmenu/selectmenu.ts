import { Component } from '@angular/core';

import { NavController , LoadingController } from 'ionic-angular';
// import { LoadingController } from 'ionic-angular';
 import { RestraFind } from '../restrafind/restrafind';
 import { ListFavPage } from '../listfav/listfav';
 import { Providers} from '../../providers/provider'

@Component({
  selector: 'select-menu',
  templateUrl: 'selectmenu.html'
})
export class SelectMenuPage {
// private nav:NavController = null;
  constructor(public navCtrl: NavController , public loadingCtrl: LoadingController, public menuList : Providers) {}

  createAccount(){
    this.loadingCtrl.create({
      content: 'Please wait...',
      duration: 1000,
      // dismissOnPageChange: true
    }).present();
      //  this.navCtrl.setRoot(RestraFind);
    }

    public backToLocation(){
       this.loadingCtrl.create({
      content: 'Please wait...',
      duration: 1000,
      // dismissOnPageChange: true
    }).present();
      this.navCtrl.push(RestraFind);
    }

    listFav(data){
      this.loadingCtrl.create({
      content: 'Please wait...',
      duration: 1000,
      // dismissOnPageChange: true
    }).present();
    this.navCtrl.push(ListFavPage,{
      'headerName' : data
    });
    }
  

}
