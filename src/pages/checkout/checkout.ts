import { Component } from '@angular/core';
import { NavController,Platform,NavParams } from 'ionic-angular';
import { Providers} from '../../providers/provider';
import { ItemDetailPage } from '../itemDetail/itemDetail';
import { PaymentPage } from '../paymentScreen/paymentScreen';
import { RestraFind } from '../restrafind/restrafind';
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
    public daySelected : string = "TODAY";
    public cartDet : any;
    public payLength : any;
    constructor(public navCtrl: NavController, public api: Providers, public platform: Platform,public params:NavParams){
             this.payLength = params.get("checkCount");
            this.restName = params.get("storeName");
            this.checkOut = this.api.itemDet;
            // console.log("dfdsff",JSON.stringify(this.checkOut));
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
    daySelect(data){
        this.daySwitch();
            this.daySelected = data;
    }
    closeCheckOut(){
        this.navCtrl.push(ItemDetailPage,{
            "checkCount" : this.payLength
        });
    }
    makePaymentScreen(){
        this.navCtrl.push(PaymentPage,{
            "checkOutPayment" : this.checkOut
        });
    }
    storePageList(){
        this.navCtrl.push(RestraFind);
    }
}