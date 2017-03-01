import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Providers} from '../../providers/provider';

@Component({
    selector: "page-checkout",
    templateUrl: 'checkout.html'
})
export class CheckoutPage{
    public daySwitchVal : boolean = false;
    brightness : number = 20;
    constructor(public navCtrl: NavController, public api: Providers){

    }
    daySwitch(){
        if(this.daySwitchVal){
            this.daySwitchVal = false;
        }else{
            this.daySwitchVal = true;
        }
    }
}