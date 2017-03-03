import { Component } from '@angular/core';
import { NavController,Platform,NavParams } from 'ionic-angular';
import { Providers} from '../../providers/provider';

@Component({
    selector: "page-checkout",
    templateUrl: 'checkout.html'
})
export class CheckoutPage{
    public daySwitchVal : boolean = false;
    brightness : number = 2;
    travelMode: string = "DELIVERY";
    public platFormType : any;
    checkOut : any;
    store_name : any;
    public restName : any;
    public totalAmt : any;
    public indAmt : number = 0;
    constructor(public navCtrl: NavController, public api: Providers, public platform: Platform,public params:NavParams){
            this.checkOut = params.get("checkOutPayment");
            this.restName = params.get("storeName");
            var countLength = this.checkOut.length;
             for(let data of this.checkOut) {
                 data.price = +data.price;
                      this.indAmt += data.quantity * parseInt(data.price);
                      this.totalAmt = this.indAmt;
             }
    }
    daySwitch(){
        if(this.daySwitchVal){
            this.daySwitchVal = false;
        }else{
            this.daySwitchVal = true;
        }
    }
}