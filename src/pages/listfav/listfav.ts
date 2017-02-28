import { Component} from '@angular/core';

import { NavController,NavParams, LoadingController, Platform , AlertController,Nav } from 'ionic-angular';
import { SelectMenuPage } from '../selectmenu/selectmenu';
import { RestraFind } from '../restrafind/restrafind';
import {StatusBar, Push, Splashscreen} from "ionic-native";
import { Providers} from '../../providers/provider';
import { CardMenuPage } from '../cardmenu/cardmenu'


@Component({
  selector: 'location-map',
  styles: [`
    .sebm-google-map-container {
       height: 300px;
     }
  `],
  templateUrl: 'listfav.html'
})
export class ListFavPage {
 nav: Nav;
 public headerName :any;
  constructor(public navCtrl: NavController ,public params:NavParams, public listFav : Providers, public loadingCtrl: LoadingController,public platform: Platform,public alertCtrl: AlertController) { 
    this.headerName = params.get("headerName") ;
    console.log(JSON.stringify(this.headerName));
     platform.ready().then(() => {
      StatusBar.styleDefault();
      Splashscreen.hide();
      this.initPushNotification();
    });
  }

  initPushNotification(){
    if (!this.platform.is('cordova')) {
      console.warn("Push notifications not initialized. Cordova is not available - Run in physical device");
      return;
    }
    let push = Push.init({
      android: {
        senderID: "382341315924"
      },
      ios: {
        alert: "true",
        badge: false,
        sound: "true"
      },
      windows: {}
    });

    push.on('registration', (data) => {
      console.log("device token ->", data.registrationId);
      //TODO - send device token to server
    });
    push.on('notification', (data) => {
      console.log('message', data.message);
      let self = this;
      //if user using app and push notification comes
      if (data.additionalData.foreground) {
        // if application open, show popup
        let confirmAlert = this.alertCtrl.create({
          title: 'New Notification',
          message: data.message,
          buttons: [{
            text: 'Ignore',
            role: 'cancel'
          }, {
            text: 'View',
            handler: () => {
              //TODO: Your logic here
              self.nav.push(SelectMenuPage, {message: data.message});
            }
          }]
        });
        confirmAlert.present();
      } else {
        //if user NOT using app and push notification comes
        //TODO: Your logic on click of push notification directly
        self.nav.push(SelectMenuPage, {message: data.message});
        console.log("Push notification clicked");
      }
    });
    push.on('error', (e) => {
      console.log(e.message);
    });
  }

  public cardMenu(){
    this.loadingCtrl.create({
      content: 'Please wait...',
      duration: 1000,
      //  dismissOnPageChange: true
    }).present();
    this.navCtrl.push(CardMenuPage);
  }

  public backToRestraunt(){
    this.loadingCtrl.create({
      content: 'Please wait...',
      duration: 1000,
      //  dismissOnPageChange: true
    }).present();
    this.navCtrl.push(RestraFind);
  }

}
