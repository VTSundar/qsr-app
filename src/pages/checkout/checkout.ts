import { Component } from '@angular/core';
import { NavController, Platform, NavParams, AlertController, ToastController } from 'ionic-angular';
import { Providers } from '../../providers/provider';
import { ItemDetailPage } from '../itemDetail/itemDetail';
import { PaymentPage } from '../paymentScreen/paymentScreen';
import { RestraFind } from '../restrafind/restrafind';
@Component({
    selector: "page-checkout",
    templateUrl: 'checkout.html'
})
export class CheckoutPage {
    public daySwitchVal: boolean = false;
    brightness: number = 12;
    travelMode: string = "DELIVERY";
    public platFormType: any;
    checkOut: any;
    store_name: any;
    public restName: any;
    public totalAmt: any = 0;
    public indAmt: number = 0;
    public daySelected: string = "TODAY";
    public cartDet: any;
    public payLength: any;
    public restNameLength: any;
    public cartDetails: any;
    public cartDetailsCopy: any;
    public itemPrice : any = 0;
    constructor(public navCtrl: NavController, public api: Providers, public platform: Platform, public params: NavParams, public alertCtrl: AlertController, public toastCtrl: ToastController) {
        this.payLength = params.get("checkCount");
        // this.restName = params.get("storeName");
        this.totalAmt = params.get("total");
        this.checkOut = this.api.itemDet;
        this.restNameLength = this.api.restName.length;
        this.restName = this.api.restName[this.restNameLength - 1]['restName'];
        // console.log("dfdsff",JSON.stringify(this.checkOut));
        for (let data of this.checkOut) {
            this.itemPrice = +data.price;
            this.indAmt += data.quantity * parseFloat(this.itemPrice);
            this.totalAmt = this.indAmt;
        }
    }
    daySwitch() {
        if (this.daySwitchVal) {
            this.daySwitchVal = false;
        } else {
            this.daySwitchVal = true;
        }
    }
    daySelect(data) {
        this.daySwitch();
        this.daySelected = data;
    }
    closeCheckOut() {
        this.navCtrl.push(ItemDetailPage, {
            "checkCount": this.payLength
        });
    }
    makePaymentScreen() {
        this.navCtrl.push(PaymentPage, {
            "checkOutPayment": this.checkOut,
            "storeName": this.restName,
            "total": this.totalAmt
        });
    }
    storePageList() {
        this.navCtrl.push(RestraFind);
    }
    removeItems(data) {
        let confirm = this.alertCtrl.create({
            title: 'Remove Item(s)',
            message: 'Are you sure? You want to remove this item(s)?',
            buttons: [
                {
                    text: 'Ok',
                    handler: () => {
                        this.cartDetailsCopy = this.api.itemDet.filter(
                            book => book.size !== data.size || book.name !== data.name);
                        let toast = this.toastCtrl.create({
                            message: 'Item Removed Successfully.',
                            duration: 3000,
                            position: 'bottom'
                        });
                        toast.present(toast);
                        this.api.itemDet = this.cartDetailsCopy;
                        this.checkOut = this.api.itemDet;
                        this.indAmt = 0;
                        for (let data of this.checkOut) {
                            this.itemPrice = +data.price;
                            this.indAmt += data.quantity * parseFloat(this.itemPrice);
                            this.totalAmt = this.indAmt;
                        }
                    }
                },
                {
                    text: 'Cancel',
                    handler: () => {
                        console.log(JSON.stringify(data));
                    }
                }
            ]
        });
        confirm.present();
    }
}