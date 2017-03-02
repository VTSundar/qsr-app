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
    constructor(public navCtrl: NavController, public api: Providers, public platform: Platform,public params:NavParams){
            this.checkOut = params.get("checkOutPayment");
            var checkOutPay = this.checkOut;
            this.store_name = checkOutPay.name;
            console.log("tewtwe",JSON.stringify(this.checkOut));
            console.log("tewtwe",JSON.stringify(this.store_name));
    }
    daySwitch(){
        if(this.daySwitchVal){
            this.daySwitchVal = false;
        }else{
            this.daySwitchVal = true;
        }
    }
}