import {Injectable} from '@angular/core';
import {Http} from '@angular/http';


@Injectable()
export class Providers{
    constructor(public http : Http){}

    // Restaurant List
    items = [
    {
      'name' : '26702 PORTOLA PARKWAY',
      'header' : 'FOOTHILL RANCH, CA',
      'long' : '1.2',
      'miles' : 'Miles',
      'status' : 'open',
      'timingsWeekDays' : '9.30am - 11.00pm',
      'timingSat' : '9.30am - 11.30pm',
      'timingSun' : '9.30am - 12.00pm',
      'mobileNo' : '(949) 588-0716'
    },
    {
      'name' : '12996 ALPHARETTA HWY 9 MILTON',
      'header' : 'HWY 9 MILTON, GA',
      'long' : '1.5',
      'miles' : 'Miles',
      'status' : 'closed',
      'timingsWeekDays' : '9.30am - 11.00pm',
      'timingSat' : '9.30am - 11.30pm',
      'timingSun' : '9.30am - 12.30pm',
      'mobileNo' : '(929) 568-0654'
    },
    {
      'name' : '12452 ALPHARETTA HWY 7 MILTON',
      'header' : 'ALPHARETTA HWY, GA 30253',
      'long' : '1.8',
      'miles' : 'Miles',
      'status' : 'closed',
      'timingsWeekDays' : '9.30am - 11.00pm',
      'timingSat' : '8.30am - 11.30pm',
      'timingSun' : '8.00am - 12.00pm',
      'mobileNo' : '(965) 234-6544'
    },
    {
      'name' : '145 HARBISON BLVD COLUMBIA',
      'header' : 'HARBISON BLVD, SC',
      'long' : '2.1',
      'miles' : 'Miles',
      'status' : 'open',
      'timingsWeekDays' : '9.30am - 11.00pm',
      'timingSat' : '9.30am - 10.30pm',
      'timingSun' : '9.30am - 11.30pm',
      'mobileNo' : '(890) 543-4236'
    },
    {
      'name' : '862 S. WHITE SANDS BLVD.ALAMOGORDO',
      'header' : 'WHITE SANDS BLVD.ALAMOGORDO, NM',
      'long' : '2.4',
      'miles' : 'Miles',
      'status' : 'closed',
      'timingsWeekDays' : '9.30am - 11.00pm',
      'timingSat' : '9.00am - 11.30pm',
      'timingSun' : '8.30am - 12.00pm',
      'mobileNo' : '(954) 764-8768'
    },
    {
      'name' : '145 HARBISON BLVD COLUMBIA',
      'header' : 'BLVD COLUMBIA, SC',
      'long' : '2.6',
      'miles' : 'Miles',
      'status' : 'open',
      'timingsWeekDays' : '9.30am - 11.00pm',
      'timingSat' : '9.30am - 12.00pm',
      'timingSun' : '8.30am - 12.00pm',
      'mobileNo' : '(954) 534-6463'
    },
    {
      'name' : '26702 PORTOLA PARKWAY FOOTHILL',
      'header' : 'PORTOLA RANCH, CA',
      'long' : '2.8',
      'miles' : 'Miles',
      'status' : 'open',
      'timingsWeekDays' : '9.30am - 11.00pm',
      'timingSat' : '8.30am - 12.00pm',
      'timingSun' : '8.30am - 12.00pm',
      'mobileNo' : '(965) 432-6546'
    },
    {
      'name' : '26702 PORTOLA FOOTHILL RANCH',
      'header' : 'FOOTHILL PARKWAY, CA',
      'long' : '3.1',
      'miles' : 'Miles',
      'status' : 'open',
      'timingsWeekDays' : '9.30am - 11.00pm',
      'timingSat' : '9.30am - 11.30pm',
      'timingSun' : '8.30am - 12.00pm',
      'mobileNo' : '(965) 876-8768'
    },
    {
      'name' : '26702 PORTOLA PARKWAY RANCH',
      'header' : 'PARKWAY FOOTHILL, CA',
      'long' : '3.3',
      'miles' : 'Miles',
      'status' : 'closed',
      'timingsWeekDays' : '9.30am - 11.00pm',
      'timingSat' : '8.30am - 11.30pm',
      'timingSun' : '8.30am - 12.00pm',
      'mobileNo' : '(949) 545-4564'
    },
    {
      'name' : '26702 PARKWAY FOOTHILL RANCH',
      'header' : 'PORTOLA PARKWAY, CA',
      'long' : '3.6',
      'miles' : 'Miles',
      'status' : 'closed',
      'timingsWeekDays' : '9.30am - 11.00pm',
      'timingSat' : '9.00am - 11.30pm',
      'timingSun' : '9.00am - 12.00pm',
      'mobileNo' : '(867) 876-5435'
    }
  ];

  //Map Latitude and Longitude 
  markers = [
	  {
		  lat: 33.678811,
		  lng: -117.663948,
		  label: '1',
		  draggable: true
	  },
	  {
		  lat: 34.096068,
		  lng: -84.277098,
		  label: '2',
		  draggable: false
	  },
	  {
		  lat: 34.080518,
		  lng: -81.149110,
		  label: '3',
		  draggable: true
	  },
    {
		  lat: 33.8302961,
		  lng: -116.54529209999998,
		  label: '4',
		  draggable: true
	  },
    {
		  lat: 33.4483771,
		  lng: -112.07403729999999,
		  label: '5',
		  draggable: true
	  },
    {
		  lat: 31.7618778,
		  lng: -106.4850217,
		  label: '6',
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

  //Main menu list
  mainMenu = [
    {
      id: 1,
      name: "breakfast"
    },
    {
      id: 2,
      name: "combos"
    },
    {
      id: 3,
      name: "tacos"
    },
    {
      id: 4,
      name: "burritos"
    },
    {
      id: 5,
      name: "kid's meals"
    },
    {
      id: 6,
      name: "desserts & snakes"
    },
    {
      id: 7,
      name: "american grill"
    }
  ]

}