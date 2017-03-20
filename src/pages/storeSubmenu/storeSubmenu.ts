import { Component } from '@angular/core';

import { NavController, ToastController } from 'ionic-angular';
import { AppService } from '../../providers/app-service';
import { Providers } from '../../providers/provider';
import { StoreMainMenuPage } from '../storeMainMenu/storeMainMenu';
import { StoreDetailsPage } from '../storeDetails/storeDetails';

@Component({
  selector: 'store-submenu-page',
  templateUrl: 'storeSubmenu.html'
})
export class StoreSubmenuPage {
  public productCategories: any;
  public productItems: any;
  subCategory: boolean = false;
  constructor(public navCtrl: NavController, public appService: AppService, public api: Providers, public toastCtrl: ToastController) {
    this.getProductCategory();
  }

  getProductCategory() {
    this.appService.getProductCategoryByFamilyId(this.appService.selectedFamily.objectId)
      .then(data => {
        console.log("product category", data);
        this.productCategories = data;
      })
      .catch(err => {
        console.log("product category err", err);
      });
  }
  selectCategory(category) {
    this.subCategory = true;
    this.appService.selectedCategory = category;
    this.appService.getProductByCategoryId(category.objectId)
      .then(data => {
        console.log("product items", data);
        this.productItems = data;
        for (let prod of this.productItems) {
          prod['price'] = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
        }
      })
      .catch(err => {
        console.log("product items err", err);
      });
  }
  back() {
    this.navCtrl.push(StoreMainMenuPage, { animate: true, direction: 'back' });
  }
  addTocart(product) {
    product['size'] = 1;
    product['qty'] = 1;
    let toast = this.toastCtrl.create({
      message: 'Successfully added to Cart',
      duration: 3000,
      position: 'bottom'
    });
    toast.present(toast);
    this.api.addCartItems.push(product);
  }
  showProductDetails(product) {
    this.api.storeItemDetails = product;
    console.log("storeItemDetails", this.api.storeItemDetails);
    this.navCtrl.push(StoreDetailsPage, {}, { animate: true, direction: 'forward' });
  }
}
