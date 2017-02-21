import { Component} from '@angular/core';

import { NavController,NavParams , LoadingController , Platform } from 'ionic-angular';
import { SelectMenuPage } from '../selectmenu/selectmenu';
import { RestraFind } from '../restrafind/restrafind';
import { Providers} from '../../providers/provider'


@Component({
  selector: 'location-map',
  styles: [`
    .sebm-google-map-container {
       height: 300px;
     }
  `],
  templateUrl: 'location.html'
})
export class LocationMapPage {
  
  public firstParam:any;
  public platFormType : any;
  locName : string = this.locName;
  // console.log(JSON.stringify(locName));
  zoom: number = 5;
  lat: number = 33.678811;
  lng: number = -117.663948;

  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`)
  }

  constructor(public navCtrl: NavController , public params:NavParams , public loadingCtrl: LoadingController,public platform: Platform, public mapList : Providers) {
      this.firstParam = params.get("mapData");
      var paramAdd = this.firstParam;
      console.log("Loca",JSON.stringify(this.firstParam));
      console.log("Loca1",JSON.stringify(paramAdd.name));
      this.locName = paramAdd.Name;
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


  public selectFav(){
    this.loadingCtrl.create({
      content: 'Please wait...',
      duration: 3000,
      //  dismissOnPageChange: true
    }).present();
    this.navCtrl.setRoot(SelectMenuPage);
  }

  public backToRestraunt(){
    this.loadingCtrl.create({
      content: 'Please wait...',
      duration: 3000,
      //  dismissOnPageChange: true
    }).present();
    this.navCtrl.push(RestraFind);
  }

}
