import { Component } from '@angular/core';

import { NavController, Platform } from 'ionic-angular';

@Component({
  selector: 'page-item-detail',
  templateUrl: 'itemDetail.html'
})
export class ItemDetailPage {
  public ionScroll : any;
  constructor(public navCtrl: NavController, public platform: Platform) {
    this.ionScroll = true;
  }

}
