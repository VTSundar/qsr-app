import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { AppSettings } from '../constants/constant';

/*
  Generated class for the AppService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class AppService {
  public data : any;
  public productFamily: any;
  public productCategory: any;
  public product: any;
  public productCategoryByFamily: any;
  public productByCategory: any;
  public storeList: any;
  public paymentCards: any;
  public selectedFamily: any;
  public selectedCategory: any;
  public customizeItems: any;
  public giftCardPayments : any;
  public cardDesign : any;
  customizeSubItems = [];
  mapDetailList: any;
  navPageDetail: any;
  cardAmountDet : any;
  public headerObj: any = {
    'X-Parse-Application-Id': AppSettings.APPLICATION_ID,
    'X-Parse-Client-Key': AppSettings.CLIENT_KEY,
    'Content-Type': 'application/json'
  }

  constructor(public http: Http) {
    console.log('Hello AppService Provider');
    //Initial load
    // this.getProductFamily();
    // this.getProductCategory();
    // this.getProduct();
    // this.getStoreList();
  }
  /**
   * Get product family
   */
  getProductFamily(){
    return new Promise(resolve => {
      if(!this.productFamily){
        let headers = new Headers(this.headerObj);
        this.http.get(AppSettings.API_ENDPOINT+"ProductFamily", {headers: headers})
          .map(res => res.json())
          .subscribe(data => {
            console.log("family", data);
            this.productFamily = data['results'];
            resolve(this.productFamily);
        });
      }else{
        resolve(this.productFamily);
      }
    });
  }
  /**
   * get product category
   */
  getProductCategory(){
    return new Promise(resolve => {
      if(!this.productCategory){
        let headers = new Headers(this.headerObj);
        this.http.get(AppSettings.API_ENDPOINT+"ProductCategory", {headers: headers})
          .map(res => res.json())
          .subscribe(data => {
            console.log("productCategory", data);
            this.productCategory = data['results'];
            resolve(this.productCategory);
        });
      }else{
        resolve(this.productCategory);
      }
    });
  }
  /**
   * get product category
   */
  getProduct(){
    return new Promise(resolve => {
      if(!this.product){
        let headers = new Headers(this.headerObj);
        this.http.get(AppSettings.API_ENDPOINT+"Product", {headers: headers})
          .map(res => res.json())
          .subscribe(data => {
            console.log("product", data);
            this.product = data['results'];
            resolve(this.product);
        });
      }else{
        resolve(this.product);
      }
    });
  }
  /**
   * Get product category by family id
   * @param familyId
   */
  getProductCategoryByFamilyId(familyId){
    return new Promise((resolve, reject) => {
      if(familyId){
        this.getProductCategory()
        .then(data => {
          this.productCategoryByFamily = this.productCategory.filter(
            category => {
              if(!category.family){
                return false;
              }else{
                return category.family.objectId === familyId
              }
            }
          );
          resolve(this.productCategoryByFamily);
        })
        .catch(err => {
          reject(err);
        });
      }else{
        reject("familyId missing");
      }
    });
  }
  /**
   * Get product by category id
   * @param categoryId
   */
  getProductByCategoryId(categoryId){
    return new Promise((resolve, reject) => {
      if(categoryId){
        this.productByCategory = this.product.filter(
          product => {
            if(!product.category){
              return false;
            }else{
              return product.category.objectId === categoryId
            }
          }
        );
        resolve(this.productByCategory);
      }else{
        reject("categoryId missing");
      }
    });
  }
  /**
   * Get store list
   */
  getStoreList(){
    return new Promise(resolve => {
      if(!this.storeList){
        let headers = new Headers(this.headerObj);
        this.http.get(AppSettings.API_ENDPOINT+"Store", {headers: headers})
          .map(res => res.json())
          .subscribe(data => {
            console.log("Store", data);
            this.storeList = data['results'];
            for (let store of this.storeList) {
                store.qsr_latitude = parseFloat(store.qsr_latitude);
                store.qsr_longitude = parseFloat(store.qsr_longitude);
            }
            console.log("Detail", this.storeList);
            resolve(this.storeList);
          });
      }else{
        resolve(this.storeList);
      }
    });
  }
  /**
   * get payment cards
   */
  getPaymentCard(){
    return new Promise((resolve, reject) =>{
      this.paymentCards = [
        {
          "id": null,
          "name": "new"
        },
        {
          "id": 123,
          "name": "XXX",
          "BankName": "XXX",
          "image" : "../../assets/imgs/cards/visa_card.png"
        },
        {
          "id": 1234,
          "name": "XXX",
          "BankName": "XXX",
         "image" : "../../assets/imgs/cards/master_card.png"
        }
      ]
      resolve(this.paymentCards);
    });
  }
  /**
   * Get Customize Header
  */
  getCustomize() {
    return new Promise((resolve, reject) => {
      this.customizeItems = [
        {
          "id": 1,
          "name": "Add Whole Food Boosts",
          "add_btn": "../assets/imgs/template2/add_icon_white.png",
          "subItems": [
            {
              "name": "Chia",
              "price": 0.75
            },
            {
              "name": "Greek Yogurt",
              "price": 0.75
            },
            {
              "name": "Kale",
              "price": 0.75
            },
            {
              "name": "Pumpkin Seeds",
              "price": 0.75
            }
          ]
        },
        {
          "id": 2,
          "name": "Add Boosts",
          "add_btn": "../assets/imgs/template2/add_icon_white.png",
          "subItems": [
            {
              "name": "3G Energy with Green Caffeine",
              "price": 0.25
            },
            {
              "name": "Zinc & Antioxidant",
              "price": 0.25
            },
            {
              "name": "Daily Vitamin",
              "price": 0.25
            },
            {
              "name": "Lean Balance",
              "price": 0.25
            },
            {
              "name": "Soy Protein",
              "price": 0.25
            },
            {
              "name": "Whey Protein",
              "price": 0.25
            },
          ]
        }
      ]
      resolve(this.customizeItems);
    });
  }
  getNextRedeemOffer(){
    return new Promise((resolve, reject) => {
      let redeemOffer = [
        {
          id: 123,
          doller: "$5",
          points: "50 Points"
        },
        {
          id: 124,
          doller: "$10",
          points: "100 Points"
        },
        {
          id: 125,
          doller: "$15",
          points: "150 Points"
        },
        {
          id: 126,
          doller: "$20",
          points: "200 Points"
        }
      ];
      resolve(redeemOffer);
    });
  }

  getSearchByNameItem(){
    this.getProduct();
  }

  giftCard(){
    return new Promise((resolve, reject) =>{
      this.giftCardPayments = [
        {
          "name": "Thanks Giving Day",
          "price": "10.00",
          "image" : "../assets/imgs/Rectangle.png"
        },
        {
          "name": "Mothers Day",
          "price": "5.00",
          "image" : "../assets/imgs/Rectangle 10 Copy 2.png"
        },
        {
          "name": "Squeeze the Day",
          "price": "0.99",
          "image" : "../assets/imgs/doubledeckertacos.jpg"
        }
      ]
      resolve(this.giftCardPayments);
    });
  }

  cardDesignList(){
    return new Promise((resolve, reject) =>{
      this.cardDesign = [
        {
          "name": "Thanks Giving Day",
          "price": "10.00",
          "image" : "../assets/imgs/Rectangle.png"
        },
        {
          "name": "Happy Fathers Day",
          "price": "5.00",
          "image" : "../assets/imgs/Rectangle 10 Copy 2.png"
        },
        {
          "name": "Happy Mothers Day",
          "price": "3.00",
          "image" : "../assets/imgs/doubledeckertacos.jpg"
        },
        {
          "name": "Squeeze the Day",
          "price": "8.00",
          "image" : "../assets/imgs/startscreen1.jpg"
        }
      ]
      resolve(this.cardDesign);
    });
  }
}
