import { Component } from '@angular/core';
// import {Injectable} from "angular2/core";

import { NavController , LoadingController, Platform } from 'ionic-angular';
// import { LoginPage } from '../login/login';
import { LocationMapPage } from '../location/location';
import { Providers} from '../../providers/provider';
import { HomePage } from '../home/home';
import { StartscreenPage } from '../startscreen/startscreen';

@Component({
  selector: 'page-rest',
  templateUrl: 'restrafind.html'
})
export class RestraFind {
  public platFormType : any;
  // tabBarElement: any;
  
  constructor(public navCtrl: NavController , public loadingCtrl: LoadingController , public restraList : Providers,public platform: Platform) {
      // this.tabBarElement = document.querySelector('.tabbar.show-tabbar');
      // this.tabBarElement.style.display = 'none';
      if (this.platform.is('android')) {
     this.platFormType = 'Mobile';
   }
   else if(this.platform.is('ios')){
     this.platFormType = 'Ios';
   }
   else{
        this.platFormType = 'Windows';
   }
  }

  public slideNav(data){
     this.loadingCtrl.create({
      content: 'Please wait...',
      duration: 3000,
      // dismissOnPageChange: true
    }).present();
    this.navCtrl.push(LocationMapPage,{
      'mapData' : data
    });
  }
  public backToStartPage(){
     this.loadingCtrl.create({
      content: 'Please wait...',
      duration: 3000,
      //  dismissOnPageChange: true
    }).present();
    
    this.navCtrl.push(StartscreenPage);
  }

}
