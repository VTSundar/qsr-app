import { Component } from '@angular/core';

import { NavController, Platform } from 'ionic-angular';
import { Providers } from '../../providers/provider';
import { StartScreenPage } from '../startscreen/startscreen';
import { DashboardPage } from '../dashboard/dashboard';

@Component({
  selector: 'profile-page',
  templateUrl: 'profile.html'
})
export class Profile {
  public startScreenInfo : any;
  public platFormType : any;
  public editable :  any = false;
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
    this.navCtrl.push(DashboardPage,{},{ animate: true, direction: 'back' });
  }

  editProfile(){
    if(this.editable == false){
      this.editable = true;
    } else {
      this.editable = false;
    }
    
  }

}