import { Component } from '@angular/core';
// import {Injectable} from "angular2/core";

import { NavController , LoadingController } from 'ionic-angular';
// import { LoginPage } from '../login/login';
import { LocationMapPage } from '../location/location';
import { Providers} from '../../providers/provider'
import { HomePage } from '../home/home'

@Component({
  selector: 'page-rest',
  templateUrl: 'restrafind.html'
})
export class RestraFind {
  // tabBarElement: any;
  
  constructor(public navCtrl: NavController , public loadingCtrl: LoadingController , public restraList : Providers) {
      // this.tabBarElement = document.querySelector('.tabbar.show-tabbar');
      // this.tabBarElement.style.display = 'none';
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
  public backToMain(){
     this.loadingCtrl.create({
      content: 'Please wait...',
      duration: 3000,
      //  dismissOnPageChange: true
    }).present();
    
    this.navCtrl.push(HomePage);
  }

}
