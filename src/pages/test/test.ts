import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { AppService } from '../../providers/app-service';

@Component({
  selector: 'page-test',
  templateUrl: 'test.html'
})
export class TestPage {

  constructor(public navCtrl: NavController, public api: AppService) {
    // api.getProductFamily()
    // .then(data => {
    //   console.log("family", data);
    // })
    // .catch(err => {
    //   console.log("err", err);
    // });

    // api.getProductCategory()
    // .then(categorydata => {
    //   console.log("productCategory", categorydata);
    //   api.getProductCategoryByFamilyId(categorydata[0].family.objectId)
    //   .then(data => {
    //     console.log("productCategoryByFamily", data);
    //   })
    //   .catch(err => {
    //     console.log("err", err);
    //   });
    // })
    // .catch(err => {
    //   console.log("err", err);
    // });

    // api.getProduct()
    // .then(productdata => {
    //   console.log("product", productdata);
    //   api.getProductByCategoryId(productdata[0].category.objectId)
    //   .then(data => {
    //     console.log("productByCategoryId", data);
    //   })
    //   .catch(err => {
    //     console.log("err", err);
    //   });
    // })
    // .catch(err => {
    //   console.log("err", err);
    // });
  }

}
