import {Injectable} from '@angular/core';
import {Http} from '@angular/http';


@Injectable()
export class Providers{
    constructor(public http : Http){}

    // Restaurant List
    items = [
    {
      'name' : '26702 PORTOLA PARKWAY FOOTHILL RANCH, CA',
      'miles' : '1.2 Miles',
      'status' : 'open',
      'timings' : 'MON - SAT : 24 HOURS',
      'mobileNo' : '(949) 588-0716'
    },
    {
      'name' : '12996 ALPHARETTA HWY 9 MILTON, GA 30253',
      'miles' : '1.5 Miles',
      'status' : 'closed',
      'timings' : 'MON - SAT : 20 HOURS',
      'mobileNo' : '(929) 568-0654'
    },
    {
      'name' : '12452 ALPHARETTA HWY 7 MILTON, GA 30253',
      'miles' : '1.8 Miles',
      'status' : 'closed',
      'timings' : 'MON - SAT : 16 HOURS',
      'mobileNo' : '(965) 234-6544'
    },
    {
      'name' : '145 HARBISON BLVD COLUMBIA, SC 29212',
      'miles' : '2.1 Miles',
      'status' : 'open',
      'timings' : 'MON - SAT : 24 HOURS',
      'mobileNo' : '(890) 543-4236'
    },
    {
      'name' : '862 S. WHITE SANDS BLVD.ALAMOGORDO, NM 88310',
      'miles' : '2.4 Miles',
      'status' : 'closed',
      'timings' : 'MON - SAT : 24 HOURS',
      'mobileNo' : '(954) 764-8768'
    },
    {
      'name' : '145 HARBISON BLVD COLUMBIA, SC 29212',
      'miles' : '2.6 Miles',
      'status' : 'open',
      'timings' : 'MON - SUN : 24 HOURS',
      'mobileNo' : '(954) 534-6463'
    },
    {
      'name' : '26702 PORTOLA PARKWAY FOOTHILL RANCH, CA',
      'miles' : '2.8 Miles',
      'status' : 'open',
      'timings' : 'MON - SUN : 24 HOURS',
      'mobileNo' : '(965) 432-6546'
    },
    {
      'name' : '26702 PORTOLA PARKWAY FOOTHILL RANCH, CA',
      'miles' : '3.1 Miles',
      'status' : 'open',
      'timings' : 'MON - SAT : 24 HOURS',
      'mobileNo' : '(965) 876-8768'
    },
    {
      'name' : '26702 PORTOLA PARKWAY FOOTHILL RANCH, CA',
      'miles' : '3.3 Miles',
      'status' : 'closed',
      'timings' : 'MON - FRI : 24 HOURS',
      'mobileNo' : '(949) 545-4564'
    },
    {
      'name' : '26702 PORTOLA PARKWAY FOOTHILL RANCH, CA',
      'miles' : '3.6 Miles',
      'status' : 'closed',
      'timings' : 'MON - SUN : 24 HOURS',
      'mobileNo' : '(867) 876-5435'
    }
  ];

  //Map Latitude and Longitude 
  markers = [
	  {
		  lat: 33.678811,
		  lng: -117.663948,
		  label: 'A',
		  draggable: true
	  },
	  {
		  lat: 34.096068,
		  lng: -84.277098,
		  label: 'B',
		  draggable: false
	  },
	  {
		  lat: 34.080518,
		  lng: -81.149110,
		  label: 'C',
		  draggable: true
	  },
    {
		  lat: 33.8302961,
		  lng: -116.54529209999998,
		  label: 'D',
		  draggable: true
	  },
    {
		  lat: 33.4483771,
		  lng: -112.07403729999999,
		  label: 'E',
		  draggable: true
	  },
    {
		  lat: 31.7618778,
		  lng: -106.4850217,
		  label: 'F',
		  draggable: true
	  }
  ]

  //Select Menu List
  menuListItem = [
    {
      'name' : "FLATBREAD TACOS",
      'image' : "../../assets/imgs/jamba3.jpg"
    },
    {
      'name' : "AMERICAN GRILL",
      'image' : "../../assets/imgs/jamba4.jpg"
    },
    {
      'name' : "COMBOS & AMERICAN GRILL",
      'image' : "../../assets/imgs/jamba5.jpg"
    },
    {
      'name' : "COMBOS & FLATBREAD TACOS",
      'image' : "../../assets/imgs/jamba6.jpg"
    },
    {
      'name' : "COMBOS & TACOS",
      'image' : "../../assets/imgs/jamba2.jpg"
    }
  ]

  //List Fav Item
  listFavItem = [
    {
      'name' : "FLATBREAD TACOS",
      'image' : "../../assets/imgs/jamba3.jpg",
      'price' : "$15"
    },
    {
      'name' : "AMERICAN GRILL",
      'image' : "../../assets/imgs/jamba4.jpg",
      'price' : "$18"
    },
    {
      'name' : "COMBOS & AMERICAN GRILL",
      'image' : "../../assets/imgs/jamba5.jpg",
      'price' : "$10"
    },
    {
      'name' : "COMBOS & FLATBREAD TACOS",
      'image' : "../../assets/imgs/jamba6.jpg",
      'price' : "$20"
    },
    {
      'name' : "COMBOS & TACOS",
      'image' : "../../assets/imgs/jamba2.jpg",
      'price' : "$8"
    }
  ]

  //Card Menu List 
  cardMenuList = [
    {
      'name' : "PIZZA",
      'subname' : "FEAST | VEG DELIGHT | NON VEG | PASTA",
      'image' : "../../assets/imgs/pizza.jpg"
    },
    {
      'name' : "TACOS",
      'subname' : "DOUBLE DECKER | LOCOS",
      'image' : "../../assets/imgs/tacos.jpg"
    },
    {
      'name' : "COMBOS",
      'subname' : "MEXICAN | POWER MENU BOWL",
      'image' : "../../assets/imgs/combos.jpg"
    },
    {
      'name' : "BURRITOS",
      'subname' : "BEAN | SMOTHERED | BEFFY",
      'image' : "../../assets/imgs/burritos.jpg"
    },
  ]

}