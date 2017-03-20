import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { AppService } from '../../providers/app-service';
@Component({
  selector: 'rewards-screen',
  templateUrl: 'rewards.html'
})
export class RewardsPage {

  constructor(public navCtrl: NavController, public appService: AppService) {
    
  }
}
