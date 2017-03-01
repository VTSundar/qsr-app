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
  items:any;
  constructor(public navCtrl: NavController , public loadingCtrl: LoadingController , public restraList : Providers,public platform: Platform) {
      // this.tabBarElement = document.querySelector('.tabbar.show-tabbar');
      // this.tabBarElement.style.display = 'none';
       this.restraList.restraListItems();
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
  public getItems(ev) {
    // Reset items back to all of the items
    this.restraList.restraListItems();

    // set val to the value of the ev target
    var val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
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
