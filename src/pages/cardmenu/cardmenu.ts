import { Component } from '@angular/core';

import { NavController , LoadingController, Platform } from 'ionic-angular';
// import { LoadingController } from 'ionic-angular';
 import { RestraFind } from '../restrafind/restrafind';
 import { ListFavPage } from '../listfav/listfav';
 import { Providers} from '../../providers/provider'

@Component({
  selector: 'card-menu',
  templateUrl: 'cardmenu.html'
})
export class CardMenuPage {
  public platFormType : any;
// private nav:NavController = null;
  constructor(public navCtrl: NavController , public loadingCtrl: LoadingController, public cardMenuList : Providers,public platform: Platform) {
     if (this.platform.is('android')) {
     this.platFormType = 'Mobile';
   }
   else if(this.platform.is('ios')){
     this.platFormType = 'Ios';
   }
   else{
        this.platFormType = 'Mobile';
   }
  }

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

    listFav(data){
      this.loadingCtrl.create({
      content: 'Please wait...',
      duration: 3000,
      // dismissOnPageChange: true
    }).present();
    this.navCtrl.push(ListFavPage,{
      'headerName' : data
    });
    }
  

}