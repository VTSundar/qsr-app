import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
// import { NavController, NavParams } from 'ionic-angular';


@Injectable()
export class Providers {
  constructor(public http: Http) {
  }
  menuStoreDet = []; //Storing Menu Details
  public items: any;
  public selectedStore = [];
  addCartItems = []; //Storing items when click add cart
  storeItemDetails: any; //for storing all item details like size,price etc
  navPaymentPage: any;
  promoDis: any = 0;
  redeemItems = [];
  offerItems = [];
  rewardsPageNav : any;
  qrCodeItems : any;
  redirectDashboard : any;
  verifyDis: any = 0;
  verifyCodeTxt : any;
  checkRemoveCoupon : any;
  newAddress = [];
  //Start Screen Page Info
  startScreenInfo = [
    {
      "image": "../../assets/imgs/startscreen1.png",
      "desc": "Customize & quickly order your faves, skip our line inside & Live Mas"
    },
    {
      "image": "../../assets/imgs/startscreen1.png",
      "desc": "Quickly order your faves, skip our line inside & Live Mas"
    },
    {
      "image": "../../assets/imgs/startscreen1.png",
      "desc": "Customize your faves, skip our line inside & Live Mas"
    }
  ]

  // template 2 Map

  storeLocations = [
    {
      lat: 33.678811,
      lng: -117.663948,
      label: '1',
      draggable: true,
      name: '26702 PORTOLA PARKWAY',
      header: 'FOOTHILL RANCH, CA',
      long: '1.2',
      miles: 'Miles',
      status: 'open',
      timingsWeekDays: '9.30am - 11.00pm',
      timingSat: '9.30am - 11.30pm',
      timingSun: '9.30am - 12.00pm',
      mobileNo: '(949) 588-0716',
      image: "../assets/imgs/map2.png",
      store_image: "../assets/imgs/stores/jambajuice.jpg",
      storeName: 'Jamba Juice',
      Address: '26702 PORTOLA PARKWAY,FOOTHILL RANCH, CA'
    },
    {
      lat: 34.096068,
      lng: -84.277098,
      label: '2',
      draggable: false,
      name: '12996 ALPHARETTA HWY 9 MILTON',
      header: 'HWY 9 MILTON, GA',
      long: '1.5',
      miles: 'Miles',
      status: 'closed',
      timingsWeekDays: '9.30am - 11.00pm',
      timingSat: '9.30am - 11.30pm',
      timingSun: '9.30am - 12.30pm',
      mobileNo: '(929) 568-0654',
      image: "../assets/imgs/map2.png",
      store_image: "../assets/imgs/stores/deltaco.jpg",
      storeName: 'Deltaco',
      Address: '12996 ALPHARETTA HWY 9 MILTON,HWY 9 MILTON, GA'
    },
    {
      lat: 34.080518,
      lng: -81.149110,
      label: '3',
      draggable: true,
      name: '12452 ALPHARETTA HWY 7 MILTON',
      header: 'ALPHARETTA HWY, GA 30253',
      long: '1.8',
      miles: 'Miles',
      status: 'closed',
      timingsWeekDays: '9.30am - 11.00pm',
      timingSat: '8.30am - 11.30pm',
      timingSun: '8.00am - 12.00pm',
      mobileNo: '(965) 234-6544',
      image: "../assets/imgs/map2.png",
      store_image: "../assets/imgs/stores/honey_baked_ham.jpg",
      storeName: 'Honey Baked Ham',
      Address: '12452 ALPHARETTA HWY 7 MILTON,ALPHARETTA HWY, GA 30253'
    },
    {
      lat: 33.8302961,
      lng: -116.54529209999998,
      label: '4',
      draggable: true,
      name: '145 HARBISON BLVD COLUMBIA',
      header: 'HARBISON BLVD, SC',
      long: '2.1',
      miles: 'Miles',
      status: 'open',
      timingsWeekDays: '9.30am - 11.00pm',
      timingSat: '9.30am - 10.30pm',
      timingSun: '9.30am - 11.30pm',
      mobileNo: '(890) 543-4236',
      image: "../assets/imgs/map2.png",
      store_image: "../assets/imgs/stores/starbucks.jpg",
      storeName: 'Starbucks',
      Address: '145 HARBISON BLVD COLUMBIA,HARBISON BLVD, SC'
    },
    {
      lat: 33.4483771,
      lng: -112.07403729999999,
      label: '5',
      draggable: true,
      name: '26702 PORTOLA PARKWAY FOOTHILL',
      header: 'PORTOLA RANCH, CA',
      long: '2.8',
      miles: 'Miles',
      status: 'open',
      timingsWeekDays: '9.30am - 11.00pm',
      timingSat: '8.30am - 12.00pm',
      timingSun: '8.30am - 12.00pm',
      mobileNo: '(965) 432-6546',
      image: "../assets/imgs/map2.png",
      store_image: "../assets/imgs/stores/walmart.jpg",
      storeName: 'Walmart',
      Address: '26702 PORTOLA PARKWAY FOOTHILL,PORTOLA RANCH, CA'
    },
    {
      lat: 31.7618778,
      lng: -106.4850217,
      label: '6',
      draggable: true,
      name: '145 HARBISON BLVD COLUMBIA',
      header: 'BLVD COLUMBIA, SC',
      long: '2.6',
      miles: 'Miles',
      status: 'open',
      timingsWeekDays: '9.30am - 11.00pm',
      timingSat: '9.30am - 12.00pm',
      timingSun: '8.30am - 12.00pm',
      mobileNo: '(954) 534-6463',
      image: "../assets/imgs/map2.png",
      store_image: "../assets/imgs/stores/randalls.jpg",
      storeName: 'Randalls',
      Address: '2145 HARBISON BLVD COLUMBIA,BLVD COLUMBIA, SC'
    }
  ]
  // Restaurant List
  restraListItems() {
    this.items = [
      {
        'name': '26702 PORTOLA PARKWAY',
        'header': 'FOOTHILL RANCH, CA',
        'long': '1.2',
        'miles': 'Miles',
        'status': 'open',
        'timingsWeekDays': '9.30am - 11.00pm',
        'timingSat': '9.30am - 11.30pm',
        'timingSun': '9.30am - 12.00pm',
        'mobileNo': '(949) 588-0716'
      },
      {
        'name': '12996 ALPHARETTA HWY 9 MILTON',
        'header': 'HWY 9 MILTON, GA',
        'long': '1.5',
        'miles': 'Miles',
        'status': 'closed',
        'timingsWeekDays': '9.30am - 11.00pm',
        'timingSat': '9.30am - 11.30pm',
        'timingSun': '9.30am - 12.30pm',
        'mobileNo': '(929) 568-0654'
      },
      {
        'name': '12452 ALPHARETTA HWY 7 MILTON',
        'header': 'ALPHARETTA HWY, GA 30253',
        'long': '1.8',
        'miles': 'Miles',
        'status': 'closed',
        'timingsWeekDays': '9.30am - 11.00pm',
        'timingSat': '8.30am - 11.30pm',
        'timingSun': '8.00am - 12.00pm',
        'mobileNo': '(965) 234-6544'
      },
      {
        'name': '145 HARBISON BLVD COLUMBIA',
        'header': 'HARBISON BLVD, SC',
        'long': '2.1',
        'miles': 'Miles',
        'status': 'open',
        'timingsWeekDays': '9.30am - 11.00pm',
        'timingSat': '9.30am - 10.30pm',
        'timingSun': '9.30am - 11.30pm',
        'mobileNo': '(890) 543-4236'
      },
      {
        'name': '862 S. WHITE SANDS BLVD.ALAMOGORDO',
        'header': 'WHITE SANDS BLVD.ALAMOGORDO, NM',
        'long': '2.4',
        'miles': 'Miles',
        'status': 'closed',
        'timingsWeekDays': '9.30am - 11.00pm',
        'timingSat': '9.00am - 11.30pm',
        'timingSun': '8.30am - 12.00pm',
        'mobileNo': '(954) 764-8768'
      },
      {
        'name': '145 HARBISON BLVD COLUMBIA',
        'header': 'BLVD COLUMBIA, SC',
        'long': '2.6',
        'miles': 'Miles',
        'status': 'open',
        'timingsWeekDays': '9.30am - 11.00pm',
        'timingSat': '9.30am - 12.00pm',
        'timingSun': '8.30am - 12.00pm',
        'mobileNo': '(954) 534-6463'
      },
      {
        'name': '26702 PORTOLA PARKWAY FOOTHILL',
        'header': 'PORTOLA RANCH, CA',
        'long': '2.8',
        'miles': 'Miles',
        'status': 'open',
        'timingsWeekDays': '9.30am - 11.00pm',
        'timingSat': '8.30am - 12.00pm',
        'timingSun': '8.30am - 12.00pm',
        'mobileNo': '(965) 432-6546'
      },
      {
        'name': '26702 PORTOLA FOOTHILL RANCH',
        'header': 'FOOTHILL PARKWAY, CA',
        'long': '3.1',
        'miles': 'Miles',
        'status': 'open',
        'timingsWeekDays': '9.30am - 11.00pm',
        'timingSat': '9.30am - 11.30pm',
        'timingSun': '8.30am - 12.00pm',
        'mobileNo': '(965) 876-8768'
      },
      {
        'name': '26702 PORTOLA PARKWAY RANCH',
        'header': 'PARKWAY FOOTHILL, CA',
        'long': '3.3',
        'miles': 'Miles',
        'status': 'closed',
        'timingsWeekDays': '9.30am - 11.00pm',
        'timingSat': '8.30am - 11.30pm',
        'timingSun': '8.30am - 12.00pm',
        'mobileNo': '(949) 545-4564'
      },
      {
        'name': '26702 PARKWAY FOOTHILL RANCH',
        'header': 'PORTOLA PARKWAY, CA',
        'long': '3.6',
        'miles': 'Miles',
        'status': 'closed',
        'timingsWeekDays': '9.30am - 11.00pm',
        'timingSat': '9.00am - 11.30pm',
        'timingSun': '9.00am - 12.00pm',
        'mobileNo': '(867) 876-5435'
      }
    ];
  }

  //Item details
  storeItemsDet = [
    {
      "image": "../../assets/imgs/pizza.jpg",
      "matName": "Chicken Supreme",
      "matFlav": "Chicken Tikka,Chicken Hot & Chilly,Chicken Meatball",
      "status": "../../assets/imgs/non-veg.jpg",
      "price": "21.50"
    },
    {
      "image": "../../assets/imgs/pizza.jpg",
      "matName": "Exotica",
      "matFlav": "Red Capsicum,Green Capsicum,Baby Corn,Black Olives,Jalapenas",
      "status": "../../assets/imgs/vegetarian.png",
      "desc": "These mangoes will get you movin! Are you the President of the Mango Appreciation Society?Do you count mangoes to fall asleep? Then Welcome to Paradise.",
      "price": "21.50"
    },
    {
      "image": "../../assets/imgs/pizza.jpg",
      "matName": "Ultimate Chicken",
      "matFlav": "Chicken Meatball,Chicken Pepperoni,Chicken Sausage,Chicken Keema",
      "status": "../../assets/imgs/non-veg.jpg",
      "desc": "These mangoes will get you movin! Are you the President of the Mango Appreciation Society?Do you count mangoes to fall asleep? Then Welcome to Paradise.",
      "price": "24.50"
    },
    {
      "image": "../../assets/imgs/pizza.jpg",
      "matName": "Paneer Vegorama",
      "matFlav": "Paneer,Onion,Capsicum,Olives,Red Paprika",
      "status": "../../assets/imgs/vegetarian.png",
      "desc": "These mangoes will get you movin! Are you the President of the Mango Appreciation Society?Do you count mangoes to fall asleep? Then Welcome to Paradise.",
      "price": "20.00"
    },
    {
      "image": "../../assets/imgs/pizza.jpg",
      "matName": "Exotica",
      "matFlav": "Chicken Tikka,Chicken Hot & Chilly,Chicken Meatball",
      "status": "../../assets/imgs/vegetarian.png",
      "desc": "These mangoes will get you movin! Are you the President of the Mango Appreciation Society?Do you count mangoes to fall asleep? Then Welcome to Paradise.",
      "price": "20.00"
    },
    {
      "image": "../../assets/imgs/pizza.jpg",
      "matName": "Ultimate Chicken",
      "matFlav": "Chicken Tikka,Chicken Hot & Chilly,Chicken Meatball",
      "status": "../../assets/imgs/non-veg.jpg",
      "desc": "These mangoes will get you movin! Are you the President of the Mango Appreciation Society?Do you count mangoes to fall asleep? Then Welcome to Paradise.",
      "price": "22.00"
    }
  ]

  //Rewards List
  rewardsList = [
    {
      "rewardPrice": 5,
      "rewardItem": "Mango-A-Go-Go Smoothie",
      "rewardSubTitle": "Must represent coupon at time of purchase to receive offer",
      "redeemFlag": false,
      "rewardExpires": "JUN/05/2017"
    },
    {
      "rewardPrice": 8,
      "rewardItem": "Chilli Mango",
      "rewardSubTitle": "Must represent coupon at time of purchase to receive offer",
      "redeemFlag": false,
      "rewardExpires": "Offer Expired"
    },
    {
      "rewardPrice": 3,
      "rewardItem": "Orange Berry Antioxidant",
      "rewardSubTitle": "Must represent coupon at time of purchase to receive offer",
      "redeemFlag": false,
      "rewardExpires": "MAY/08/2017"
    }
  ]

  //Offer List
  offerList = [
    {
      "offerPrice": 6,
      "offerItem": "Aloha Pineapple",
      "offerSubTitle": "Mondays Only.Carry out or Drive-Thru only. Limit 3 per Order.No coupon necessary",
      "offerExpires": "MAY/27/2017"
    },
    {
      "offerPrice": 8,
      "offerItem": "Orange Berry Antioxidant",
      "offerSubTitle": "Thursday & Saturday Only.Carry out or Drive-Thru only. Limit 3 per Order.No coupon necessary",
      "offerExpires": "MAY/20/2017"
    },
    {
      "offerPrice": 4.99,
      "offerItem": "Caribbean Passion",
      "offerSubTitle": "Tuesday,Saturday & Sunday Only.Carry out or Drive-Thru only. Limit 7 per Order.No coupon necessary",
      "offerExpires": "JUN/25/2017"
    }
  ]

  //Verification Code
  verificationCode = ["ALGFH4233","BLOEW6543","ABFDT3214","BVGRE7521","QDASD6542"];
}