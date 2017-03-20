import { Component } from '@angular/core';

import { NavController, Platform } from 'ionic-angular';
import { Providers } from '../../providers/provider';
import { StartScreenPage } from '../startscreen/startscreen';

@Component({
  selector: 'add-card-page',
  templateUrl: 'addCard.html'
})
export class AddCard {
  public startScreenInfo : any;
  public platFormType : any;
  constructor(public navCtrl: NavController, public api: Providers, public platform: Platform) {
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

  startupPage(){
    this.navCtrl.push(StartScreenPage,{},{ animate: true, direction: 'back' });
  }
}