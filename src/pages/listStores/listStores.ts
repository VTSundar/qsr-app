import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { Providers } from '../../providers/provider';
import { AppService } from '../../providers/app-service';
import { LocationMapPage } from '../../pages/location/location';
import { StoreLocation } from '../storeLocation/storeLocation';

@Component({
  selector: 'list-store',
  templateUrl: 'listStores.html'
})
export class ListStores {
    public platFormType : any;
    public listStores : any;
  constructor(public navCtrl: NavController, public api: Providers, public appService: AppService, public platform: Platform) {
    // this.listStores = this.appService.storeList;
    appService.getStoreList()
      .then(data => {
        this.listStores = data;
        console.log("listStores", this.listStores);
        let value = this.bindMiles(this.listStores);
        console.log("value", value);
    });
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
  toMapScreen(item){
    this.appService.mapDetailList = item;
    this.appService.navPageDetail = "List";
    console.log("specificItem",item);
    this.navCtrl.push(LocationMapPage);
  }
  bindMiles(locations){
        let usersLocation = {
            lat: 43.0484036, 
            lng: -87.9053711
        };
 
        locations.map((location) => {
 
            let placeLocation = {
                lat: location.qsr_latitude,
                lng: location.qsr_longitude
            };
 
            location.distance = this.getDistanceBetweenPoints(
                usersLocation,
                placeLocation,
                'miles'
            ).toFixed(2);
        });
 
        return locations;
    }
 
    getDistanceBetweenPoints(start, end, units){
 
        let earthRadius = {
            miles: 3958.8,
            km: 6371
        };
 
        let R = earthRadius[units || 'miles'];
        let lat1 = start.lat;
        let lon1 = start.lng;
        let lat2 = end.lat;
        let lon2 = end.lng;
 
        let dLat = this.toRad((lat2 - lat1));
        let dLon = this.toRad((lon2 - lon1));
        let a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(this.toRad(lat1)) * Math.cos(this.toRad(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
        let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        let d = R * c;
 
        return d;
 
    }
 
    toRad(x){
        return x * Math.PI / 180;
    }
    toStartScreenPage() {
        this.navCtrl.push(StoreLocation);
    }
}