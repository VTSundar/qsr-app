import { Component, NgZone } from '@angular/core';
import { NavParams, AlertController, NavController, LoadingController } from 'ionic-angular';
import { Geolocation } from 'ionic-native';
declare var window: any;
import { MapsAPILoader } from 'angular2-google-maps/core';
declare var google: any;
import { Providers } from '../../providers/provider';
import { AppService } from '../../providers/app-service';
import { detStore } from '../detStore/detStore';
import { StartScreenPage } from '../startscreen/startscreen';
import { StoreLocation } from '../storeLocation/storeLocation';
import { StoreItemsPage } from '../storeItems/storeItems';

@Component({
    styles: [`
    .sebm-google-map-container {
       height: 100%;
     }
  `],
    templateUrl: 'location.html',
    selector: 'store-items'
})
export class LocationMapPage {
    map: any;
    firstTime: boolean = true;
    isDisplayOfflineMode: boolean = false;
    public mapDet: any;
    public storeDetails: any;
    public storeName: any;
    public storeDist: any;
    public storeImg: any;
    public storeAddr: any;
    public storeNumber: any;
    public zoom: number = 5;
    public lat: number = 43.0484036;
    public lng: number = -87.9053711;
    public image: any;
    public getStoreDetails: any;
    public mapImg: any;
    public storeCity: any;
    public storeCountry: any;
    public storeDet: any;
    public storeHours: any;
    public storepickup: any;
    constructor(private navParams: NavParams, private zone: NgZone, private _loader: MapsAPILoader,
        private alert: AlertController, public provider: Providers, public api: AppService, public navCtrl: NavController, public loadingCtrl: LoadingController) {
        if (this.api.navPageDetail == "List") {
            this.getStoreDetails = [this.api.mapDetailList];
            this.mapImg = "../../assets/imgs/template2/map_marker.png";
            this.storeName = this.getStoreDetails[0].qsr_name;
            this.storeAddr = this.getStoreDetails[0].qsr_streetaddress;
            this.storeCity = this.getStoreDetails[0].qsr_city;
            this.storeCountry = this.getStoreDetails[0].qsr_country;
            this.storeNumber = this.getStoreDetails[0].qsr_telephone;
            this.storeHours = this.getStoreDetails[0].qsr_hours;
            this.storepickup = this.getStoreDetails[0].qsr_pickup_hours;
            this.lat = this.getStoreDetails[0].qsr_latitude;
            this.lng = this.getStoreDetails[0].qsr_longitude;
        }
        else if(this.api.navPageDetail == "Search"){
            this.getStoreDetails = this.api.mapDetailList;
            console.log("dasddfasd",JSON.stringify(this.getStoreDetails));
            this.mapImg = "../../assets/imgs/template2/map_marker.png";
            this.storeName = this.getStoreDetails[0].qsr_name;
            this.storeAddr = this.getStoreDetails[0].qsr_streetaddress;
            this.storeCity = this.getStoreDetails[0].qsr_city;
            this.storeCountry = this.getStoreDetails[0].qsr_country;
            this.storeNumber = this.getStoreDetails[0].qsr_telephone;
            this.storeHours = this.getStoreDetails[0].qsr_hours;
            this.storepickup = this.getStoreDetails[0].qsr_pickup_hours;
            this.lat = this.getStoreDetails[0].qsr_latitude;
            this.lng = this.getStoreDetails[0].qsr_longitude;
        }
        else {
            api.getStoreList()
                .then(data => {
                    this.getStoreDetails = data;
                    console.log("StoreDetails", this.getStoreDetails);
                    this.mapDet = this.provider.storeLocations;
                    this.getStoreDetails[0].qsr_latitude = 43.0484036;
                    this.getStoreDetails[0].qsr_longitude = -87.9053711;
                    // this.mapDet[0].image = "../../assets/imgs/map1.png";
                    this.storeName = this.getStoreDetails[0].qsr_name;
                    this.storeDist = this.getStoreDetails[0].qsr_distance;
                    // this.storeImg = this.mapDet[0].store_image;
                    this.storeAddr = this.getStoreDetails[0].qsr_streetaddress;
                    this.storeCity = this.getStoreDetails[0].qsr_city;
                    this.storeCountry = this.getStoreDetails[0].qsr_country;
                    this.storeNumber = this.getStoreDetails[0].qsr_telephone;
                    this.storeHours = this.getStoreDetails[0].qsr_hours;
                    this.storepickup = this.getStoreDetails[0].qsr_pickup_hours;
                    this.mapImg = "../../assets/imgs/template2/map_marker.png";
                    // this.getRandomNumber(1,10);
                });
        }


    }
    clickedMarker(index: number, data) {
        console.log("dsadsa", JSON.stringify(data));
        this.storeDetails = data;
        this.storeName = this.storeDetails.qsr_name;
        this.storeDist = this.storeDetails.qsr_distance;
        // this.storeImg = this.storeDetails.store_image;
        this.storeCity = this.storeDetails.qsr_city;
        this.storeCountry = this.storeDetails.qsr_country;
        this.storeNumber = this.storeDetails.qsr_telephone;
        this.storeHours = this.storeDetails.qsr_hours;
        this.storepickup = this.storeDetails.qsr_pickup_hours;
        this.mapImg = "../../assets/imgs/template2/map_marker.png";
        this.storeAddr = this.storeDetails.qsr_streetaddress;
        this.storeNumber = this.storeDetails.qsr_telephone;
        console.log("header", JSON.stringify(this.storeDetails.header));
    }
    storeDetailScreen(data) {
        if (data == undefined) {
            this.storeDet = {
                "qsr_name": this.getStoreDetails[0].qsr_name,
                "qsr_streetaddress": this.getStoreDetails[0].qsr_streetaddress,
                "qsr_city": this.getStoreDetails[0].qsr_city,
                "qsr_hours": this.getStoreDetails[0].qsr_hours,
                "qsr_telephone": this.getStoreDetails[0].qsr_telephone,
                "qsr_pickup_hours": this.getStoreDetails[0].qsr_pickup_hours,
                "qsr_accept_card": this.getStoreDetails[0].qsr_accept_card,
                "qsr_distance": this.getStoreDetails[0].qsr_distance
            }
            this.provider.selectedStore.push(this.storeDet);
        } else {
            this.provider.selectedStore.push(data);
        }
        this.navCtrl.push(detStore);
    }
    toStartScreen() {
        this.navCtrl.push(StoreLocation);
    }
    gotoStoreitem(){
        this.loadingCtrl.create({
        content: 'Please wait...',
        duration: 3000,
        // dismissOnPageChange: true
        }).present();
        this.navCtrl.push(StoreItemsPage);
    }
}