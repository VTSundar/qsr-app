import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
// import { NavController, NavParams } from 'ionic-angular';


@Injectable()
export class Providers {
  itemDetails: any;
  constructor(public http: Http) {
    // this.itemDetails = params.get("itemDetails");
  }
  items: any;
  storeDetails: any;
  // menuListDet: any;

  itemDet = []; //Cart Details array
  matName = []; // Storing Material matName
  restName = [];
  cartLength = []; // cart store count

  // Restaurant List
  restraListItems() {
    this.items = [
      {
        'store_id': 1,
        'name': '26702 PORTOLA PARKWAY',
        'header': 'FOOTHILL RANCH, CA',
        'long': '1.2',
        'miles': 'Miles',
        'timingsWeekDays': '9.30am - 11.00pm',
        'timingSat': '9.30am - 11.30pm',
        'timingSun': '9.30am - 12.00pm',
        'mobileNo': '(949) 588-0716',
        'lat': 33.678811,
        'lng': -117.663948,
        'label': '1',
        'draggable': false,
        'features': [
          {
            'id': 1,
            'name': "Breakfast",
            'img': "../../assets/imgs/breakfast.png"
          },
          {
            'id': 2,
            'name': "Drive thru",
            'img': "../../assets/imgs/drivethru.png"
          },
          {
            'id': 3,
            'name': "Open",
            'img': "../../assets/imgs/open_features.png"
          }
        ]
      },
      {
        'store_id': 2,
        'name': '12996 ALPHARETTA HWY 9 MILTON',
        'header': 'HWY 9 MILTON, GA',
        'long': '1.5',
        'miles': 'Miles',
        'timingsWeekDays': '9.30am - 11.00pm',
        'timingSat': '9.30am - 11.30pm',
        'timingSun': '9.30am - 12.30pm',
        'mobileNo': '(929) 568-0654',
        'lat': 34.096068,
        'lng': -84.277098,
        'label': '2',
        'draggable': false,
        'features': [
          {
            'id': 1,
            'name': "Breakfast",
            'img': "../../assets/imgs/breakfast.png"
          },
          {
            'id': 2,
            'name': "Drive thru",
            'img': "../../assets/imgs/drivethru.png"
          }
        ]
      },
      {
        'store_id': 3,
        'name': '12452 ALPHARETTA HWY 7 MILTON',
        'header': 'ALPHARETTA HWY, GA 30253',
        'long': '1.8',
        'miles': 'Miles',
        'timingsWeekDays': '9.30am - 11.00pm',
        'timingSat': '8.30am - 11.30pm',
        'timingSun': '8.00am - 12.00pm',
        'mobileNo': '(965) 234-6544',
        'lat': 34.080518,
        'lng': -81.149110,
        'label': '3',
        'draggable': false,
        'features': [
          {
            'id': 1,
            'name': "Breakfast",
            'img': "../../assets/imgs/breakfast.png"
          }
        ]
      },
      {
        'store_id': 4,
        'name': '145 HARBISON BLVD COLUMBIA',
        'header': 'HARBISON BLVD, SC',
        'long': '2.1',
        'miles': 'Miles',
        'timingsWeekDays': '9.30am - 11.00pm',
        'timingSat': '9.30am - 10.30pm',
        'timingSun': '9.30am - 11.30pm',
        'mobileNo': '(890) 543-4236',
        'lat': 30.267153,
        'lng': -97.743061,
        'label': '4',
        'draggable': false,
        'features': [
          {
            'id': 1,
            'name': "Breakfast",
            'img': "../../assets/imgs/breakfast.png"
          }
        ]
      },
      {
        'store_id': 5,
        'name': '862 S. WHITE SANDS BLVD.ALAMOGORDO',
        'header': 'WHITE SANDS BLVD.ALAMOGORDO, NM',
        'long': '2.4',
        'miles': 'Miles',
        'timingsWeekDays': '9.30am - 11.00pm',
        'timingSat': '9.00am - 11.30pm',
        'timingSun': '8.30am - 12.00pm',
        'mobileNo': '(954) 764-8768',
        'lat': 33.4483771,
        'lng': -112.07403729999999,
        'label': '5',
        'draggable': false,
        'features': [
          {
            'id': 1,
            'name': "Breakfast",
            'img': "../../assets/imgs/breakfast.png"
          },
          {
            'id': 2,
            'name': "Drive thru",
            'img': "../../assets/imgs/drivethru.png"
          }
        ]
      },
      {
        'store_id': 6,
        'name': '145 HARBISON BLVD COLUMBIA',
        'header': 'BLVD COLUMBIA, SC',
        'long': '2.6',
        'miles': 'Miles',
        'timingsWeekDays': '9.30am - 11.00pm',
        'timingSat': '9.30am - 12.00pm',
        'timingSun': '8.30am - 12.00pm',
        'mobileNo': '(954) 534-6463',
        'lat': 31.7618778,
        'lng': -106.4850217,
        'label': '6',
        'draggable': false,
        'features': [
          {
            'id': 1,
            'name': "Breakfast",
            'img': "../../assets/imgs/breakfast.png"
          },
          {
            'id': 2,
            'name': "Drive thru",
            'img': "../../assets/imgs/drivethru.png"
          },
          {
            'id': 3,
            'name': "Open",
            'img': "../../assets/imgs/open_features.png"
          }
        ]
      },
      {
        'store_id': 7,
        'name': '26702 PORTOLA PARKWAY FOOTHILL',
        'header': 'PORTOLA RANCH, CA',
        'long': '2.8',
        'miles': 'Miles',
        'timingsWeekDays': '9.30am - 11.00pm',
        'timingSat': '8.30am - 12.00pm',
        'timingSun': '8.30am - 12.00pm',
        'mobileNo': '(965) 432-6546',
        'lat': 31.968599,
        'lng': -99.901813,
        'label': '7',
        'draggable': false,
        'features': [
          {
            'id': 1,
            'name': "Breakfast",
            'img': "../../assets/imgs/breakfast.png"
          },
          {
            'id': 2,
            'name': "Drive thru",
            'img': "../../assets/imgs/drivethru.png"
          }
        ]
      },
      {
        'store_id': 8,
        'name': '26702 PORTOLA FOOTHILL RANCH',
        'header': 'FOOTHILL PARKWAY, CA',
        'long': '3.1',
        'miles': 'Miles',
        'timingsWeekDays': '9.30am - 11.00pm',
        'timingSat': '9.30am - 11.30pm',
        'timingSun': '8.30am - 12.00pm',
        'mobileNo': '(965) 876-8768',
        'lat': 36.169941,
        'lng': -115.139830,
        'label': '8',
        'draggable': false,
        'features': [
          {
            'id': 1,
            'name': "Breakfast",
            'img': "../../assets/imgs/breakfast.png"
          },
          {
            'id': 2,
            'name': "Drive thru",
            'img': "../../assets/imgs/drivethru.png"
          },
          {
            'id': 3,
            'name': "Open",
            'img': "../../assets/imgs/open_features.png"
          }
        ]
      },
      {
        'store_id': 9,
        'name': '26702 PORTOLA PARKWAY RANCH',
        'header': 'PARKWAY FOOTHILL, CA',
        'long': '3.3',
        'miles': 'Miles',
        'timingsWeekDays': '9.30am - 11.00pm',
        'timingSat': '8.30am - 11.30pm',
        'timingSun': '8.30am - 12.00pm',
        'mobileNo': '(949) 545-4564',
        'lat': 32.776664,
        'lng': -96.796988,
        'label': '9',
        'draggable': false,
        'features': [
          {
            'id': 1,
            'name': "Breakfast",
            'img': "../../assets/imgs/breakfast.png"
          }
        ]
      },
      {
        'store_id': 10,
        'name': '26702 PARKWAY FOOTHILL RANCH',
        'header': 'PORTOLA PARKWAY, CA',
        'long': '3.6',
        'miles': 'Miles',
        'timingsWeekDays': '9.30am - 11.00pm',
        'timingSat': '9.00am - 11.30pm',
        'timingSun': '9.00am - 12.00pm',
        'mobileNo': '(867) 876-5435',
        'lat': 32.165622,
        'lng': -82.900075,
        'label': '10',
        'draggable': false,
        'features': [
          {
            'id': 1,
            'name': "Breakfast",
            'img': "../../assets/imgs/breakfast.png"
          },
          {
            'id': 3,
            'name': "Open",
            'img': "../../assets/imgs/open_features.png"
          }
        ]
      }
    ];
  }

  
  //Select Menu List
  menuListItem = [
    {
      'name': "FLATBREAD TACOS",
      'image': "../../assets/imgs/jamba3.jpg"
    },
    {
      'name': "AMERICAN GRILL",
      'image': "../../assets/imgs/jamba4.jpg"
    },
    {
      'name': "COMBOS & AMERICAN GRILL",
      'image': "../../assets/imgs/jamba5.jpg"
    },
    {
      'name': "COMBOS & FLATBREAD TACOS",
      'image': "../../assets/imgs/jamba6.jpg"
    },
    {
      'name': "COMBOS & TACOS",
      'image': "../../assets/imgs/jamba2.jpg"
    }
  ]

  //List Fav Item
  listFavItem = [
    {
      'name': "FLATBREAD TACOS",
      'image': "../../assets/imgs/jamba3.jpg",
      'price': "$15"
    },
    {
      'name': "AMERICAN GRILL",
      'image': "../../assets/imgs/jamba4.jpg",
      'price': "$18"
    },
    {
      'name': "COMBOS & AMERICAN GRILL",
      'image': "../../assets/imgs/jamba5.jpg",
      'price': "$10"
    },
    {
      'name': "COMBOS & FLATBREAD TACOS",
      'image': "../../assets/imgs/jamba6.jpg",
      'price': "$20"
    },
    {
      'name': "COMBOS & TACOS",
      'image': "../../assets/imgs/jamba2.jpg",
      'price': "$8"
    }
  ]

    menuListDet = [
      {
      'store_id': 1,
      'menu_id': 1,
      'menu_name': "PIZZA",
      'menu_image': "../../assets/imgs/menu_1_thumb.jpg",
      'sub_menus': [
        {
          '_id': 1,
          'name': "CHICKEN FAJITA",
          'image': "../../assets/imgs/chicken fajita.jpg",
          'desc' : "A Crunchy Taco sits on a bed of warm refried beans, while the Flour Tortilla sits underneath. I like to imagine unique tacosiblings sharing a bedroom, and they each choose their bunk based on personality.",
          'size': [
            {
              'size': "SMALL",
              'price': "4.74",
              'cal': "360Cal"
            },
            {
              'size': "MEDIUM",
              'price': "5.55",
              'cal': "495Cal"
            },
            {
              'size': "LARGE",
              'price': "6.30",
              'cal': "670Cal"
            }
          ]
        },
        {
          '_id': 2,
          'name': "CREAMY PRAWN",
          'image': "../../assets/imgs/creamy prawn.jpg",
          'desc' : "A Crunchy Taco sits on a bed of warm refried beans, while the Flour Tortilla sits underneath. I like to imagine unique tacosiblings sharing a bedroom, and they each choose their bunk based on personality.",
          'size': [
            {
              'size': "SMALL",
              'price': "4.74",
              'cal': "360Cal"
            },
            {
              'size': "MEDIUM",
              'price': "5.55",
              'cal': "495Cal"
            },
            {
              'size': "LARGE",
              'price': "6.30",
              'cal': "670Cal"
            }
          ]
        },
        {
          '_id': 3,
          'name': "FUNKY CHICKEN",
          'image': "../../assets/imgs/funky chicken.jpg",
          'desc' : "A Crunchy Taco sits on a bed of warm refried beans, while the Flour Tortilla sits underneath. I like to imagine unique tacosiblings sharing a bedroom, and they each choose their bunk based on personality.",
          'size': [
            {
              'size': "SMALL",
              'price': "4.74",
              'cal': "360Cal"
            },
            {
              'size': "MEDIUM",
              'price': "5.55",
              'cal': "495Cal"
            },
            {
              'size': "LARGE",
              'price': "6.30",
              'cal': "670Cal"
            }
          ]
        },
        {
          '_id': 4,
          'name': "GARLIC PRAWN",
          'image': "../../assets/imgs/garlic prawn.jpg",
          'desc' : "A Crunchy Taco sits on a bed of warm refried beans, while the Flour Tortilla sits underneath. I like to imagine unique tacosiblings sharing a bedroom, and they each choose their bunk based on personality.",
          'size': [
            {
              'size': "SMALL",
              'price': "4.74",
              'cal': "360Cal"
            },
            {
              'size': "MEDIUM",
              'price': "5.55",
              'cal': "495Cal"
            },
            {
              'size': "LARGE",
              'price': "6.30",
              'cal': "670Cal"
            }
          ]
        }
      ]
    },
    {
      'store_id': 1,
      'menu_id': 2,
      'menu_name': "TACOS",
      'menu_image': "../../assets/imgs/menu_2_thumb.jpg",
      'sub_menus': [
        {
          '_id': 1,
          'name': "CHICKEN FAJITA",
          'image': "../../assets/imgs/chicken fajita.jpg",
          'desc' : "A Crunchy Taco sits on a bed of warm refried beans, while the Flour Tortilla sits underneath. I like to imagine unique tacosiblings sharing a bedroom, and they each choose their bunk based on personality.",
          'size': [
            {
              'size': "SMALL",
              'price': "4.74",
              'cal': "360Cal"
            },
            {
              'size': "MEDIUM",
              'price': "5.55",
              'cal': "495Cal"
            },
            {
              'size': "LARGE",
              'price': "6.30",
              'cal': "670Cal"
            }
          ]
        },
        {
          '_id': 2,
          'name': "FUNKY CHICKEN",
          'image': "../../assets/imgs/funky chicken.jpg",
          'desc' : "A Crunchy Taco sits on a bed of warm refried beans, while the Flour Tortilla sits underneath. I like to imagine unique tacosiblings sharing a bedroom, and they each choose their bunk based on personality.",
          'size': [
            {
              'size': "SMALL",
              'price': "4.74",
              'cal': "360Cal"
            },
            {
              'size': "MEDIUM",
              'price': "5.55",
              'cal': "495Cal"
            },
            {
              'size': "LARGE",
              'price': "6.30",
              'cal': "670Cal"
            }
          ]
        }
      ]
    },
    {
      'store_id': 1,
      'menu_id': 3,
      'menu_name': "COMBOS",
      'menu_image': "../../assets/imgs/menu_3_thumb.jpg",
      'sub_menus': [
        {
          '_id': 1,
          'name': "CHICKEN FAJITA",
          'image': "../../assets/imgs/chicken fajita.jpg",
          'desc' : "A Crunchy Taco sits on a bed of warm refried beans, while the Flour Tortilla sits underneath. I like to imagine unique tacosiblings sharing a bedroom, and they each choose their bunk based on personality.",
          'size': [
            {
              'size': "SMALL",
              'price': "4.74",
              'cal': "360Cal"
            },
            {
              'size': "MEDIUM",
              'price': "5.55",
              'cal': "495Cal"
            },
            {
              'size': "LARGE",
              'price': "6.30",
              'cal': "670Cal"
            }
          ]
        },
        {
          '_id': 2,
          'name': "CREAMY PRAWN",
          'image': "../../assets/imgs/creamy prawn.jpg",
          'desc' : "A Crunchy Taco sits on a bed of warm refried beans, while the Flour Tortilla sits underneath. I like to imagine unique tacosiblings sharing a bedroom, and they each choose their bunk based on personality.",
          'size': [
            {
              'size': "SMALL",
              'price': "4.74",
              'cal': "360Cal"
            },
            {
              'size': "MEDIUM",
              'price': "5.55",
              'cal': "495Cal"
            },
            {
              'size': "LARGE",
              'price': "6.30",
              'cal': "670Cal"
            }
          ]
        },
        {
          '_id': 3,
          'name': "FUNKY CHICKEN",
          'image': "../../assets/imgs/funky chicken.jpg",
          'desc' : "A Crunchy Taco sits on a bed of warm refried beans, while the Flour Tortilla sits underneath. I like to imagine unique tacosiblings sharing a bedroom, and they each choose their bunk based on personality.",
          'size': [
            {
              'size': "SMALL",
              'price': "4.74",
              'cal': "360Cal"
            },
            {
              'size': "MEDIUM",
              'price': "5.55",
              'cal': "495Cal"
            },
            {
              'size': "LARGE",
              'price': "6.30",
              'cal': "670Cal"
            }
          ]
        },
        {
          '_id': 4,
          'name': "GARLIC PRAWN",
          'image': "../../assets/imgs/garlic prawn.jpg",
          'desc' : "A Crunchy Taco sits on a bed of warm refried beans, while the Flour Tortilla sits underneath. I like to imagine unique tacosiblings sharing a bedroom, and they each choose their bunk based on personality.",
          'size': [
            {
              'size': "SMALL",
              'price': "4.74",
              'cal': "360Cal"
            },
            {
              'size': "MEDIUM",
              'price': "5.55",
              'cal': "495Cal"
            },
            {
              'size': "LARGE",
              'price': "6.30",
              'cal': "670Cal"
            }
          ]
        }
      ]
    },
    {
      'store_id': 2,
      'menu_id': 1,
      'menu_name': "PIZZA",
      'menu_image': "../../assets/imgs/menu_1_thumb.jpg",
      'sub_menus': [
        {
          '_id': 1,
          'name': "CHICKEN FAJITA",
          'image': "../../assets/imgs/chicken fajita.jpg",
          'desc' : "A Crunchy Taco sits on a bed of warm refried beans, while the Flour Tortilla sits underneath. I like to imagine unique tacosiblings sharing a bedroom, and they each choose their bunk based on personality.",
          'size': [
            {
              'size': "SMALL",
              'price': "4.74",
              'cal': "360Cal"
            },
            {
              'size': "MEDIUM",
              'price': "5.55",
              'cal': "495Cal"
            },
            {
              'size': "LARGE",
              'price': "6.30",
              'cal': "670Cal"
            }
          ]
        },
        {
          '_id': 2,
          'name': "CREAMY PRAWN",
          'image': "../../assets/imgs/creamy prawn.jpg",
          'desc' : "A Crunchy Taco sits on a bed of warm refried beans, while the Flour Tortilla sits underneath. I like to imagine unique tacosiblings sharing a bedroom, and they each choose their bunk based on personality.",
          'size': [
            {
              'size': "SMALL",
              'price': "4.74",
              'cal': "360Cal"
            },
            {
              'size': "MEDIUM",
              'price': "5.55",
              'cal': "495Cal"
            },
            {
              'size': "LARGE",
              'price': "6.30",
              'cal': "670Cal"
            }
          ]
        },
        {
          '_id': 3,
          'name': "FUNKY CHICKEN",
          'image': "../../assets/imgs/funky chicken.jpg",
          'desc' : "A Crunchy Taco sits on a bed of warm refried beans, while the Flour Tortilla sits underneath. I like to imagine unique tacosiblings sharing a bedroom, and they each choose their bunk based on personality.",
          'size': [
            {
              'size': "SMALL",
              'price': "4.74",
              'cal': "360Cal"
            },
            {
              'size': "MEDIUM",
              'price': "5.55",
              'cal': "495Cal"
            },
            {
              'size': "LARGE",
              'price': "6.30",
              'cal': "670Cal"
            }
          ]
        }
      ]
    },
    {
      'store_id': 2,
      'menu_id': 2,
      'menu_name': "TACOS",
      'menu_image': "../../assets/imgs/menu_2_thumb.jpg",
      'sub_menus': [
        {
          '_id': 1,
          'name': "CHICKEN FAJITA",
          'image': "../../assets/imgs/chicken fajita.jpg",
          'desc' : "A Crunchy Taco sits on a bed of warm refried beans, while the Flour Tortilla sits underneath. I like to imagine unique tacosiblings sharing a bedroom, and they each choose their bunk based on personality.",
          'size': [
            {
              'size': "SMALL",
              'price': "4.74",
              'cal': "360Cal"
            },
            {
              'size': "MEDIUM",
              'price': "5.55",
              'cal': "495Cal"
            },
            {
              'size': "LARGE",
              'price': "6.30",
              'cal': "670Cal"
            }
          ]
        },
        {
          '_id': 2,
          'name': "CREAMY PRAWN",
          'image': "../../assets/imgs/creamy prawn.jpg",
          'desc' : "A Crunchy Taco sits on a bed of warm refried beans, while the Flour Tortilla sits underneath. I like to imagine unique tacosiblings sharing a bedroom, and they each choose their bunk based on personality.",
          'size': [
            {
              'size': "SMALL",
              'price': "4.74",
              'cal': "360Cal"
            },
            {
              'size': "MEDIUM",
              'price': "5.55",
              'cal': "495Cal"
            },
            {
              'size': "LARGE",
              'price': "6.30",
              'cal': "670Cal"
            }
          ]
        },
        {
          '_id': 3,
          'name': "GARLIC PRAWN",
          'image': "../../assets/imgs/garlic prawn.jpg",
          'desc' : "A Crunchy Taco sits on a bed of warm refried beans, while the Flour Tortilla sits underneath. I like to imagine unique tacosiblings sharing a bedroom, and they each choose their bunk based on personality.",
          'size': [
            {
              'size': "SMALL",
              'price': "4.74",
              'cal': "360Cal"
            },
            {
              'size': "MEDIUM",
              'price': "5.55",
              'cal': "495Cal"
            },
            {
              'size': "LARGE",
              'price': "6.30",
              'cal': "670Cal"
            }
          ]
        }
      ]
    },
    {
      'store_id': 3,
      'menu_id': 1,
      'menu_name': "PIZZA",
      'menu_image': "../../assets/imgs/menu_1_thumb.jpg",
      'sub_menus': [
        {
          '_id': 1,
          'name': "CHICKEN FAJITA",
          'image': "../../assets/imgs/chicken fajita.jpg",
          'desc' : "A Crunchy Taco sits on a bed of warm refried beans, while the Flour Tortilla sits underneath. I like to imagine unique tacosiblings sharing a bedroom, and they each choose their bunk based on personality.",
          'size': [
            {
              'size': "SMALL",
              'price': "4.74",
              'cal': "360Cal"
            },
            {
              'size': "MEDIUM",
              'price': "5.55",
              'cal': "495Cal"
            },
            {
              'size': "LARGE",
              'price': "6.30",
              'cal': "670Cal"
            }
          ]
        },
        {
          '_id': 2,
          'name': "CREAMY PRAWN",
          'image': "../../assets/imgs/creamy prawn.jpg",
          'desc' : "A Crunchy Taco sits on a bed of warm refried beans, while the Flour Tortilla sits underneath. I like to imagine unique tacosiblings sharing a bedroom, and they each choose their bunk based on personality.",
          'size': [
            {
              'size': "SMALL",
              'price': "4.74",
              'cal': "360Cal"
            },
            {
              'size': "MEDIUM",
              'price': "5.55",
              'cal': "495Cal"
            },
            {
              'size': "LARGE",
              'price': "6.30",
              'cal': "670Cal"
            }
          ]
        },
        {
          '_id': 3,
          'name': "FUNKY CHICKEN",
          'image': "../../assets/imgs/funky chicken.jpg",
          'desc' : "A Crunchy Taco sits on a bed of warm refried beans, while the Flour Tortilla sits underneath. I like to imagine unique tacosiblings sharing a bedroom, and they each choose their bunk based on personality.",
          'size': [
            {
              'size': "SMALL",
              'price': "4.74",
              'cal': "360Cal"
            },
            {
              'size': "MEDIUM",
              'price': "5.55",
              'cal': "495Cal"
            },
            {
              'size': "LARGE",
              'price': "6.30",
              'cal': "670Cal"
            }
          ]
        },
        {
          '_id': 4,
          'name': "GARLIC PRAWN",
          'image': "../../assets/imgs/garlic prawn.jpg",
          'desc' : "A Crunchy Taco sits on a bed of warm refried beans, while the Flour Tortilla sits underneath. I like to imagine unique tacosiblings sharing a bedroom, and they each choose their bunk based on personality.",
          'size': [
            {
              'size': "SMALL",
              'price': "4.74",
              'cal': "360Cal"
            },
            {
              'size': "MEDIUM",
              'price': "5.55",
              'cal': "495Cal"
            },
            {
              'size': "LARGE",
              'price': "6.30",
              'cal': "670Cal"
            }
          ]
        }
      ]
    },
    {
      'store_id': 3,
      'menu_id': 2,
      'menu_name': "TACOS",
      'menu_image': "../../assets/imgs/menu_2_thumb.jpg",
      'sub_menus': [
        {
          '_id': 1,
          'name': "CHICKEN FAJITA",
          'image': "../../assets/imgs/chicken fajita.jpg",
          'desc' : "A Crunchy Taco sits on a bed of warm refried beans, while the Flour Tortilla sits underneath. I like to imagine unique tacosiblings sharing a bedroom, and they each choose their bunk based on personality.",
          'size': [
            {
              'size': "SMALL",
              'price': "4.74",
              'cal': "360Cal"
            },
            {
              'size': "MEDIUM",
              'price': "5.55",
              'cal': "495Cal"
            },
            {
              'size': "LARGE",
              'price': "6.30",
              'cal': "670Cal"
            }
          ]
        },
        {
          '_id': 2,
          'name': "FUNKY CHICKEN",
          'image': "../../assets/imgs/funky chicken.jpg",
          'desc' : "A Crunchy Taco sits on a bed of warm refried beans, while the Flour Tortilla sits underneath. I like to imagine unique tacosiblings sharing a bedroom, and they each choose their bunk based on personality.",
          'size': [
            {
              'size': "SMALL",
              'price': "4.74",
              'cal': "360Cal"
            },
            {
              'size': "MEDIUM",
              'price': "5.55",
              'cal': "495Cal"
            },
            {
              'size': "LARGE",
              'price': "6.30",
              'cal': "670Cal"
            }
          ]
        }
      ]
    },
    {
      'store_id': 3,
      'menu_id': 3,
      'menu_name': "COMBOS",
      'menu_image': "../../assets/imgs/menu_3_thumb.jpg",
      'sub_menus': [
        {
          '_id': 1,
          'name': "CHICKEN FAJITA",
          'image': "../../assets/imgs/chicken fajita.jpg",
          'desc' : "A Crunchy Taco sits on a bed of warm refried beans, while the Flour Tortilla sits underneath. I like to imagine unique tacosiblings sharing a bedroom, and they each choose their bunk based on personality.",
          'size': [
            {
              'size': "SMALL",
              'price': "4.74",
              'cal': "360Cal"
            },
            {
              'size': "MEDIUM",
              'price': "5.55",
              'cal': "495Cal"
            },
            {
              'size': "LARGE",
              'price': "6.30",
              'cal': "670Cal"
            }
          ]
        },
        {
          '_id': 2,
          'name': "CREAMY PRAWN",
          'image': "../../assets/imgs/creamy prawn.jpg",
          'desc' : "A Crunchy Taco sits on a bed of warm refried beans, while the Flour Tortilla sits underneath. I like to imagine unique tacosiblings sharing a bedroom, and they each choose their bunk based on personality.",
          'size': [
            {
              'size': "SMALL",
              'price': "4.74",
              'cal': "360Cal"
            },
            {
              'size': "MEDIUM",
              'price': "5.55",
              'cal': "495Cal"
            },
            {
              'size': "LARGE",
              'price': "6.30",
              'cal': "670Cal"
            }
          ]
        },
        {
          '_id': 3,
          'name': "FUNKY CHICKEN",
          'image': "../../assets/imgs/funky chicken.jpg",
          'desc' : "A Crunchy Taco sits on a bed of warm refried beans, while the Flour Tortilla sits underneath. I like to imagine unique tacosiblings sharing a bedroom, and they each choose their bunk based on personality.",
          'size': [
            {
              'size': "SMALL",
              'price': "4.74",
              'cal': "360Cal"
            },
            {
              'size': "MEDIUM",
              'price': "5.55",
              'cal': "495Cal"
            },
            {
              'size': "LARGE",
              'price': "6.30",
              'cal': "670Cal"
            }
          ]
        }
      ]
    },
    {
      'store_id': 4,
      'menu_id': 1,
      'menu_name': "PIZZA",
      'menu_image': "../../assets/imgs/menu_1_thumb.jpg",
      'sub_menus': [
        {
          '_id': 1,
          'name': "CHICKEN FAJITA",
          'image': "../../assets/imgs/chicken fajita.jpg",
          'desc' : "A Crunchy Taco sits on a bed of warm refried beans, while the Flour Tortilla sits underneath. I like to imagine unique tacosiblings sharing a bedroom, and they each choose their bunk based on personality.",
          'size': [
            {
              'size': "SMALL",
              'price': "4.74",
              'cal': "360Cal"
            },
            {
              'size': "MEDIUM",
              'price': "5.55",
              'cal': "495Cal"
            },
            {
              'size': "LARGE",
              'price': "6.30",
              'cal': "670Cal"
            }
          ]
        },
        {
          '_id': 2,
          'name': "CREAMY PRAWN",
          'image': "../../assets/imgs/creamy prawn.jpg",
          'desc' : "A Crunchy Taco sits on a bed of warm refried beans, while the Flour Tortilla sits underneath. I like to imagine unique tacosiblings sharing a bedroom, and they each choose their bunk based on personality.",
          'size': [
            {
              'size': "SMALL",
              'price': "4.74",
              'cal': "360Cal"
            },
            {
              'size': "MEDIUM",
              'price': "5.55",
              'cal': "495Cal"
            },
            {
              'size': "LARGE",
              'price': "6.30",
              'cal': "670Cal"
            }
          ]
        },
        {
          '_id': 3,
          'name': "FUNKY CHICKEN",
          'image': "../../assets/imgs/funky chicken.jpg",
          'desc' : "A Crunchy Taco sits on a bed of warm refried beans, while the Flour Tortilla sits underneath. I like to imagine unique tacosiblings sharing a bedroom, and they each choose their bunk based on personality.",
          'size': [
            {
              'size': "SMALL",
              'price': "4.74",
              'cal': "360Cal"
            },
            {
              'size': "MEDIUM",
              'price': "5.55",
              'cal': "495Cal"
            },
            {
              'size': "LARGE",
              'price': "6.30",
              'cal': "670Cal"
            }
          ]
        },
        {
          '_id': 4,
          'name': "GARLIC PRAWN",
          'image': "../../assets/imgs/garlic prawn.jpg",
          'desc' : "A Crunchy Taco sits on a bed of warm refried beans, while the Flour Tortilla sits underneath. I like to imagine unique tacosiblings sharing a bedroom, and they each choose their bunk based on personality.",
          'size': [
            {
              'size': "SMALL",
              'price': "4.74",
              'cal': "360Cal"
            },
            {
              'size': "MEDIUM",
              'price': "5.55",
              'cal': "495Cal"
            },
            {
              'size': "LARGE",
              'price': "6.30",
              'cal': "670Cal"
            }
          ]
        }
      ]
    },
    {
      'store_id': 4,
      'menu_id': 2,
      'menu_name': "TACOS",
      'menu_image': "../../assets/imgs/menu_2_thumb.jpg",
      'sub_menus': [
        {
          '_id': 1,
          'name': "CHICKEN FAJITA",
          'image': "../../assets/imgs/chicken fajita.jpg",
          'desc' : "A Crunchy Taco sits on a bed of warm refried beans, while the Flour Tortilla sits underneath. I like to imagine unique tacosiblings sharing a bedroom, and they each choose their bunk based on personality.",
          'size': [
            {
              'size': "SMALL",
              'price': "4.74",
              'cal': "360Cal"
            },
            {
              'size': "MEDIUM",
              'price': "5.55",
              'cal': "495Cal"
            },
            {
              'size': "LARGE",
              'price': "6.30",
              'cal': "670Cal"
            }
          ]
        },
        {
          '_id': 2,
          'name': "FUNKY CHICKEN",
          'image': "../../assets/imgs/funky chicken.jpg",
          'desc' : "A Crunchy Taco sits on a bed of warm refried beans, while the Flour Tortilla sits underneath. I like to imagine unique tacosiblings sharing a bedroom, and they each choose their bunk based on personality.",
          'size': [
            {
              'size': "SMALL",
              'price': "4.74",
              'cal': "360Cal"
            },
            {
              'size': "MEDIUM",
              'price': "5.55",
              'cal': "495Cal"
            },
            {
              'size': "LARGE",
              'price': "6.30",
              'cal': "670Cal"
            }
          ]
        }
      ]
    },
    {
      'store_id': 4,
      'menu_id': 3,
      'menu_name': "COMBOS",
      'menu_image': "../../assets/imgs/menu_3_thumb.jpg",
      'sub_menus': [
        {
          '_id': 1,
          'name': "CHICKEN FAJITA",
          'image': "../../assets/imgs/chicken fajita.jpg",
          'desc' : "A Crunchy Taco sits on a bed of warm refried beans, while the Flour Tortilla sits underneath. I like to imagine unique tacosiblings sharing a bedroom, and they each choose their bunk based on personality.",
          'size': [
            {
              'size': "SMALL",
              'price': "4.74",
              'cal': "360Cal"
            },
            {
              'size': "MEDIUM",
              'price': "5.55",
              'cal': "495Cal"
            },
            {
              'size': "LARGE",
              'price': "6.30",
              'cal': "670Cal"
            }
          ]
        },
        {
          '_id': 2,
          'name': "CREAMY PRAWN",
          'image': "../../assets/imgs/creamy prawn.jpg",
          'desc' : "A Crunchy Taco sits on a bed of warm refried beans, while the Flour Tortilla sits underneath. I like to imagine unique tacosiblings sharing a bedroom, and they each choose their bunk based on personality.",
          'size': [
            {
              'size': "SMALL",
              'price': "4.74",
              'cal': "360Cal"
            },
            {
              'size': "MEDIUM",
              'price': "5.55",
              'cal': "495Cal"
            },
            {
              'size': "LARGE",
              'price': "6.30",
              'cal': "670Cal"
            }
          ]
        },
        {
          '_id': 3,
          'name': "FUNKY CHICKEN",
          'image': "../../assets/imgs/funky chicken.jpg",
          'desc' : "A Crunchy Taco sits on a bed of warm refried beans, while the Flour Tortilla sits underneath. I like to imagine unique tacosiblings sharing a bedroom, and they each choose their bunk based on personality.",
          'size': [
            {
              'size': "SMALL",
              'price': "4.74",
              'cal': "360Cal"
            },
            {
              'size': "MEDIUM",
              'price': "5.55",
              'cal': "495Cal"
            },
            {
              'size': "LARGE",
              'price': "6.30",
              'cal': "670Cal"
            }
          ]
        },
        {
          '_id': 4,
          'name': "GARLIC PRAWN",
          'image': "../../assets/imgs/garlic prawn.jpg",
          'desc' : "A Crunchy Taco sits on a bed of warm refried beans, while the Flour Tortilla sits underneath. I like to imagine unique tacosiblings sharing a bedroom, and they each choose their bunk based on personality.",
          'size': [
            {
              'size': "SMALL",
              'price': "4.74",
              'cal': "360Cal"
            },
            {
              'size': "MEDIUM",
              'price': "5.55",
              'cal': "495Cal"
            },
            {
              'size': "LARGE",
              'price': "6.30",
              'cal': "670Cal"
            }
          ]
        }
      ]
    },
    {
      'store_id': 5,
      'menu_id': 1,
      'menu_name': "PIZZA",
      'menu_image': "../../assets/imgs/menu_1_thumb.jpg",
      'sub_menus': [
        {
          '_id': 1,
          'name': "CHICKEN FAJITA",
          'image': "../../assets/imgs/chicken fajita.jpg",
          'desc' : "A Crunchy Taco sits on a bed of warm refried beans, while the Flour Tortilla sits underneath. I like to imagine unique tacosiblings sharing a bedroom, and they each choose their bunk based on personality.",
          'size': [
            {
              'size': "SMALL",
              'price': "4.74",
              'cal': "360Cal"
            },
            {
              'size': "MEDIUM",
              'price': "5.55",
              'cal': "495Cal"
            },
            {
              'size': "LARGE",
              'price': "6.30",
              'cal': "670Cal"
            }
          ]
        },
        {
          '_id': 2,
          'name': "CREAMY PRAWN",
          'image': "../../assets/imgs/creamy prawn.jpg",
          'desc' : "A Crunchy Taco sits on a bed of warm refried beans, while the Flour Tortilla sits underneath. I like to imagine unique tacosiblings sharing a bedroom, and they each choose their bunk based on personality.",
          'size': [
            {
              'size': "SMALL",
              'price': "4.74",
              'cal': "360Cal"
            },
            {
              'size': "MEDIUM",
              'price': "5.55",
              'cal': "495Cal"
            },
            {
              'size': "LARGE",
              'price': "6.30",
              'cal': "670Cal"
            }
          ]
        },
        {
          '_id': 3,
          'name': "FUNKY CHICKEN",
          'image': "../../assets/imgs/funky chicken.jpg",
          'desc' : "A Crunchy Taco sits on a bed of warm refried beans, while the Flour Tortilla sits underneath. I like to imagine unique tacosiblings sharing a bedroom, and they each choose their bunk based on personality.",
          'size': [
            {
              'size': "SMALL",
              'price': "4.74",
              'cal': "360Cal"
            },
            {
              'size': "MEDIUM",
              'price': "5.55",
              'cal': "495Cal"
            },
            {
              'size': "LARGE",
              'price': "6.30",
              'cal': "670Cal"
            }
          ]
        }
      ]
    },
    {
      'store_id':5,
      'menu_id': 2,
      'menu_name': "TACOS",
      'menu_image': "../../assets/imgs/menu_2_thumb.jpg",
      'sub_menus': [
        {
          '_id': 1,
          'name': "CHICKEN FAJITA",
          'image': "../../assets/imgs/chicken fajita.jpg",
          'desc' : "A Crunchy Taco sits on a bed of warm refried beans, while the Flour Tortilla sits underneath. I like to imagine unique tacosiblings sharing a bedroom, and they each choose their bunk based on personality.",
          'size': [
            {
              'size': "SMALL",
              'price': "4.74",
              'cal': "360Cal"
            },
            {
              'size': "MEDIUM",
              'price': "5.55",
              'cal': "495Cal"
            },
            {
              'size': "LARGE",
              'price': "6.30",
              'cal': "670Cal"
            }
          ]
        },
        {
          '_id': 2,
          'name': "FUNKY CHICKEN",
          'image': "../../assets/imgs/funky chicken.jpg",
          'desc' : "A Crunchy Taco sits on a bed of warm refried beans, while the Flour Tortilla sits underneath. I like to imagine unique tacosiblings sharing a bedroom, and they each choose their bunk based on personality.",
          'size': [
            {
              'size': "SMALL",
              'price': "4.74",
              'cal': "360Cal"
            },
            {
              'size': "MEDIUM",
              'price': "5.55",
              'cal': "495Cal"
            },
            {
              'size': "LARGE",
              'price': "6.30",
              'cal': "670Cal"
            }
          ]
        }
      ]
    },
    {
      'store_id': 5,
      'menu_id': 3,
      'menu_name': "COMBOS",
      'menu_image': "../../assets/imgs/menu_3_thumb.jpg",
      'sub_menus': [
        {
          '_id': 1,
          'name': "CHICKEN FAJITA",
          'image': "../../assets/imgs/chicken fajita.jpg",
          'desc' : "A Crunchy Taco sits on a bed of warm refried beans, while the Flour Tortilla sits underneath. I like to imagine unique tacosiblings sharing a bedroom, and they each choose their bunk based on personality.",
          'size': [
            {
              'size': "SMALL",
              'price': "4.74",
              'cal': "360Cal"
            },
            {
              'size': "MEDIUM",
              'price': "5.55",
              'cal': "495Cal"
            },
            {
              'size': "LARGE",
              'price': "6.30",
              'cal': "670Cal"
            }
          ]
        },
        {
          '_id': 2,
          'name': "CREAMY PRAWN",
          'image': "../../assets/imgs/creamy prawn.jpg",
          'desc' : "A Crunchy Taco sits on a bed of warm refried beans, while the Flour Tortilla sits underneath. I like to imagine unique tacosiblings sharing a bedroom, and they each choose their bunk based on personality.",
          'size': [
            {
              'size': "SMALL",
              'price': "4.74",
              'cal': "360Cal"
            },
            {
              'size': "MEDIUM",
              'price': "5.55",
              'cal': "495Cal"
            },
            {
              'size': "LARGE",
              'price': "6.30",
              'cal': "670Cal"
            }
          ]
        },
        {
          '_id': 3,
          'name': "GARLIC PRAWN",
          'image': "../../assets/imgs/garlic prawn.jpg",
          'desc' : "A Crunchy Taco sits on a bed of warm refried beans, while the Flour Tortilla sits underneath. I like to imagine unique tacosiblings sharing a bedroom, and they each choose their bunk based on personality.",
          'size': [
            {
              'size': "SMALL",
              'price': "4.74",
              'cal': "360Cal"
            },
            {
              'size': "MEDIUM",
              'price': "5.55",
              'cal': "495Cal"
            },
            {
              'size': "LARGE",
              'price': "6.30",
              'cal': "670Cal"
            }
          ]
        }
      ]
    },
    {
      'store_id': 6,
      'menu_id': 1,
      'menu_name': "PIZZA",
      'menu_image': "../../assets/imgs/menu_1_thumb.jpg",
      'sub_menus': [
        {
          '_id': 1,
          'name': "CHICKEN FAJITA",
          'image': "../../assets/imgs/chicken fajita.jpg",
          'desc' : "A Crunchy Taco sits on a bed of warm refried beans, while the Flour Tortilla sits underneath. I like to imagine unique tacosiblings sharing a bedroom, and they each choose their bunk based on personality.",
          'size': [
            {
              'size': "SMALL",
              'price': "4.74",
              'cal': "360Cal"
            },
            {
              'size': "MEDIUM",
              'price': "5.55",
              'cal': "495Cal"
            },
            {
              'size': "LARGE",
              'price': "6.30",
              'cal': "670Cal"
            }
          ]
        },
        {
          '_id': 2,
          'name': "CREAMY PRAWN",
          'image': "../../assets/imgs/creamy prawn.jpg",
          'desc' : "A Crunchy Taco sits on a bed of warm refried beans, while the Flour Tortilla sits underneath. I like to imagine unique tacosiblings sharing a bedroom, and they each choose their bunk based on personality.",
          'size': [
            {
              'size': "SMALL",
              'price': "4.74",
              'cal': "360Cal"
            },
            {
              'size': "MEDIUM",
              'price': "5.55",
              'cal': "495Cal"
            },
            {
              'size': "LARGE",
              'price': "6.30",
              'cal': "670Cal"
            }
          ]
        },
        {
          '_id': 3,
          'name': "FUNKY CHICKEN",
          'image': "../../assets/imgs/funky chicken.jpg",
          'desc' : "A Crunchy Taco sits on a bed of warm refried beans, while the Flour Tortilla sits underneath. I like to imagine unique tacosiblings sharing a bedroom, and they each choose their bunk based on personality.",
          'size': [
            {
              'size': "SMALL",
              'price': "4.74",
              'cal': "360Cal"
            },
            {
              'size': "MEDIUM",
              'price': "5.55",
              'cal': "495Cal"
            },
            {
              'size': "LARGE",
              'price': "6.30",
              'cal': "670Cal"
            }
          ]
        },
        {
          '_id': 4,
          'name': "GARLIC PRAWN",
          'image': "../../assets/imgs/garlic prawn.jpg",
          'desc' : "A Crunchy Taco sits on a bed of warm refried beans, while the Flour Tortilla sits underneath. I like to imagine unique tacosiblings sharing a bedroom, and they each choose their bunk based on personality.",
          'size': [
            {
              'size': "SMALL",
              'price': "4.74",
              'cal': "360Cal"
            },
            {
              'size': "MEDIUM",
              'price': "5.55",
              'cal': "495Cal"
            },
            {
              'size': "LARGE",
              'price': "6.30",
              'cal': "670Cal"
            }
          ]
        }
      ]
    },
    {
      'store_id': 6,
      'menu_id': 2,
      'menu_name': "TACOS",
      'menu_image': "../../assets/imgs/menu_2_thumb.jpg",
      'sub_menus': [
        {
          '_id': 1,
          'name': "CHICKEN FAJITA",
          'image': "../../assets/imgs/chicken fajita.jpg",
          'desc' : "A Crunchy Taco sits on a bed of warm refried beans, while the Flour Tortilla sits underneath. I like to imagine unique tacosiblings sharing a bedroom, and they each choose their bunk based on personality.",
          'size': [
            {
              'size': "SMALL",
              'price': "4.74",
              'cal': "360Cal"
            },
            {
              'size': "MEDIUM",
              'price': "5.55",
              'cal': "495Cal"
            },
            {
              'size': "LARGE",
              'price': "6.30",
              'cal': "670Cal"
            }
          ]
        },
        {
          '_id': 2,
          'name': "FUNKY CHICKEN",
          'image': "../../assets/imgs/funky chicken.jpg",
          'desc' : "A Crunchy Taco sits on a bed of warm refried beans, while the Flour Tortilla sits underneath. I like to imagine unique tacosiblings sharing a bedroom, and they each choose their bunk based on personality.",
          'size': [
            {
              'size': "SMALL",
              'price': "4.74",
              'cal': "360Cal"
            },
            {
              'size': "MEDIUM",
              'price': "5.55",
              'cal': "495Cal"
            },
            {
              'size': "LARGE",
              'price': "6.30",
              'cal': "670Cal"
            }
          ]
        }
      ]
    },
    {
      'store_id': 6,
      'menu_id': 3,
      'menu_name': "COMBOS",
      'menu_image': "../../assets/imgs/menu_3_thumb.jpg",
      'sub_menus': [
        {
          '_id': 1,
          'name': "CHICKEN FAJITA",
          'image': "../../assets/imgs/chicken fajita.jpg",
          'desc' : "A Crunchy Taco sits on a bed of warm refried beans, while the Flour Tortilla sits underneath. I like to imagine unique tacosiblings sharing a bedroom, and they each choose their bunk based on personality.",
          'size': [
            {
              'size': "SMALL",
              'price': "4.74",
              'cal': "360Cal"
            },
            {
              'size': "MEDIUM",
              'price': "5.55",
              'cal': "495Cal"
            },
            {
              'size': "LARGE",
              'price': "6.30",
              'cal': "670Cal"
            }
          ]
        },
        {
          '_id': 2,
          'name': "CREAMY PRAWN",
          'image': "../../assets/imgs/creamy prawn.jpg",
          'desc' : "A Crunchy Taco sits on a bed of warm refried beans, while the Flour Tortilla sits underneath. I like to imagine unique tacosiblings sharing a bedroom, and they each choose their bunk based on personality.",
          'size': [
            {
              'size': "SMALL",
              'price': "4.74",
              'cal': "360Cal"
            },
            {
              'size': "MEDIUM",
              'price': "5.55",
              'cal': "495Cal"
            },
            {
              'size': "LARGE",
              'price': "6.30",
              'cal': "670Cal"
            }
          ]
        },
        {
          '_id': 3,
          'name': "GARLIC PRAWN",
          'image': "../../assets/imgs/garlic prawn.jpg",
          'desc' : "A Crunchy Taco sits on a bed of warm refried beans, while the Flour Tortilla sits underneath. I like to imagine unique tacosiblings sharing a bedroom, and they each choose their bunk based on personality.",
          'size': [
            {
              'size': "SMALL",
              'price': "4.74",
              'cal': "360Cal"
            },
            {
              'size': "MEDIUM",
              'price': "5.55",
              'cal': "495Cal"
            },
            {
              'size': "LARGE",
              'price': "6.30",
              'cal': "670Cal"
            }
          ]
        }
      ]
    },
    {
      'store_id': 7,
      'menu_id': 1,
      'menu_name': "PIZZA",
      'menu_image': "../../assets/imgs/menu_1_thumb.jpg",
      'sub_menus': [
        {
          '_id': 1,
          'name': "CHICKEN FAJITA",
          'image': "../../assets/imgs/chicken fajita.jpg",
          'desc' : "A Crunchy Taco sits on a bed of warm refried beans, while the Flour Tortilla sits underneath. I like to imagine unique tacosiblings sharing a bedroom, and they each choose their bunk based on personality.",
          'size': [
            {
              'size': "SMALL",
              'price': "4.74",
              'cal': "360Cal"
            },
            {
              'size': "MEDIUM",
              'price': "5.55",
              'cal': "495Cal"
            },
            {
              'size': "LARGE",
              'price': "6.30",
              'cal': "670Cal"
            }
          ]
        },
        {
          '_id': 2,
          'name': "CREAMY PRAWN",
          'image': "../../assets/imgs/creamy prawn.jpg",
          'desc' : "A Crunchy Taco sits on a bed of warm refried beans, while the Flour Tortilla sits underneath. I like to imagine unique tacosiblings sharing a bedroom, and they each choose their bunk based on personality.",
          'size': [
            {
              'size': "SMALL",
              'price': "4.74",
              'cal': "360Cal"
            },
            {
              'size': "MEDIUM",
              'price': "5.55",
              'cal': "495Cal"
            },
            {
              'size': "LARGE",
              'price': "6.30",
              'cal': "670Cal"
            }
          ]
        },
        {
          '_id': 3,
          'name': "FUNKY CHICKEN",
          'image': "../../assets/imgs/funky chicken.jpg",
          'desc' : "A Crunchy Taco sits on a bed of warm refried beans, while the Flour Tortilla sits underneath. I like to imagine unique tacosiblings sharing a bedroom, and they each choose their bunk based on personality.",
          'size': [
            {
              'size': "SMALL",
              'price': "4.74",
              'cal': "360Cal"
            },
            {
              'size': "MEDIUM",
              'price': "5.55",
              'cal': "495Cal"
            },
            {
              'size': "LARGE",
              'price': "6.30",
              'cal': "670Cal"
            }
          ]
        },
        {
          '_id': 4,
          'name': "GARLIC PRAWN",
          'image': "../../assets/imgs/garlic prawn.jpg",
          'desc' : "A Crunchy Taco sits on a bed of warm refried beans, while the Flour Tortilla sits underneath. I like to imagine unique tacosiblings sharing a bedroom, and they each choose their bunk based on personality.",
          'size': [
            {
              'size': "SMALL",
              'price': "4.74",
              'cal': "360Cal"
            },
            {
              'size': "MEDIUM",
              'price': "5.55",
              'cal': "495Cal"
            },
            {
              'size': "LARGE",
              'price': "6.30",
              'cal': "670Cal"
            }
          ]
        }
      ]
    },
    {
      'store_id': 7,
      'menu_id': 2,
      'menu_name': "TACOS",
      'menu_image': "../../assets/imgs/menu_2_thumb.jpg",
      'sub_menus': [
        {
          '_id': 1,
          'name': "CHICKEN FAJITA",
          'image': "../../assets/imgs/chicken fajita.jpg",
          'desc' : "A Crunchy Taco sits on a bed of warm refried beans, while the Flour Tortilla sits underneath. I like to imagine unique tacosiblings sharing a bedroom, and they each choose their bunk based on personality.",
          'size': [
            {
              'size': "SMALL",
              'price': "4.74",
              'cal': "360Cal"
            },
            {
              'size': "MEDIUM",
              'price': "5.55",
              'cal': "495Cal"
            },
            {
              'size': "LARGE",
              'price': "6.30",
              'cal': "670Cal"
            }
          ]
        },
        {
          '_id': 2,
          'name': "FUNKY CHICKEN",
          'image': "../../assets/imgs/funky chicken.jpg",
          'desc' : "A Crunchy Taco sits on a bed of warm refried beans, while the Flour Tortilla sits underneath. I like to imagine unique tacosiblings sharing a bedroom, and they each choose their bunk based on personality.",
          'size': [
            {
              'size': "SMALL",
              'price': "4.74",
              'cal': "360Cal"
            },
            {
              'size': "MEDIUM",
              'price': "5.55",
              'cal': "495Cal"
            },
            {
              'size': "LARGE",
              'price': "6.30",
              'cal': "670Cal"
            }
          ]
        }
      ]
    },
    {
      'store_id': 7,
      'menu_id': 3,
      'menu_name': "COMBOS",
      'menu_image': "../../assets/imgs/menu_3_thumb.jpg",
      'sub_menus': [
        {
          '_id': 1,
          'name': "CHICKEN FAJITA",
          'image': "../../assets/imgs/chicken fajita.jpg",
          'desc' : "A Crunchy Taco sits on a bed of warm refried beans, while the Flour Tortilla sits underneath. I like to imagine unique tacosiblings sharing a bedroom, and they each choose their bunk based on personality.",
          'size': [
            {
              'size': "SMALL",
              'price': "4.74",
              'cal': "360Cal"
            },
            {
              'size': "MEDIUM",
              'price': "5.55",
              'cal': "495Cal"
            },
            {
              'size': "LARGE",
              'price': "6.30",
              'cal': "670Cal"
            }
          ]
        },
        {
          '_id': 2,
          'name': "CREAMY PRAWN",
          'image': "../../assets/imgs/creamy prawn.jpg",
          'desc' : "A Crunchy Taco sits on a bed of warm refried beans, while the Flour Tortilla sits underneath. I like to imagine unique tacosiblings sharing a bedroom, and they each choose their bunk based on personality.",
          'size': [
            {
              'size': "SMALL",
              'price': "4.74",
              'cal': "360Cal"
            },
            {
              'size': "MEDIUM",
              'price': "5.55",
              'cal': "495Cal"
            },
            {
              'size': "LARGE",
              'price': "6.30",
              'cal': "670Cal"
            }
          ]
        },
        {
          '_id': 3,
          'name': "FUNKY CHICKEN",
          'image': "../../assets/imgs/funky chicken.jpg",
          'desc' : "A Crunchy Taco sits on a bed of warm refried beans, while the Flour Tortilla sits underneath. I like to imagine unique tacosiblings sharing a bedroom, and they each choose their bunk based on personality.",
          'size': [
            {
              'size': "SMALL",
              'price': "4.74",
              'cal': "360Cal"
            },
            {
              'size': "MEDIUM",
              'price': "5.55",
              'cal': "495Cal"
            },
            {
              'size': "LARGE",
              'price': "6.30",
              'cal': "670Cal"
            }
          ]
        },
        {
          '_id': 4,
          'name': "GARLIC PRAWN",
          'image': "../../assets/imgs/garlic prawn.jpg",
          'desc' : "A Crunchy Taco sits on a bed of warm refried beans, while the Flour Tortilla sits underneath. I like to imagine unique tacosiblings sharing a bedroom, and they each choose their bunk based on personality.",
          'size': [
            {
              'size': "SMALL",
              'price': "4.74",
              'cal': "360Cal"
            },
            {
              'size': "MEDIUM",
              'price': "5.55",
              'cal': "495Cal"
            },
            {
              'size': "LARGE",
              'price': "6.30",
              'cal': "670Cal"
            }
          ]
        }
      ]
    },
    {
      'store_id': 8,
      'menu_id': 1,
      'menu_name': "PIZZA",
      'menu_image': "../../assets/imgs/menu_1_thumb.jpg",
      'sub_menus': [
        {
          '_id': 1,
          'name': "CHICKEN FAJITA",
          'image': "../../assets/imgs/chicken fajita.jpg",
          'desc' : "A Crunchy Taco sits on a bed of warm refried beans, while the Flour Tortilla sits underneath. I like to imagine unique tacosiblings sharing a bedroom, and they each choose their bunk based on personality.",
          'size': [
            {
              'size': "SMALL",
              'price': "4.74",
              'cal': "360Cal"
            },
            {
              'size': "MEDIUM",
              'price': "5.55",
              'cal': "495Cal"
            },
            {
              'size': "LARGE",
              'price': "6.30",
              'cal': "670Cal"
            }
          ]
        },
        {
          '_id': 2,
          'name': "CREAMY PRAWN",
          'image': "../../assets/imgs/creamy prawn.jpg",
          'desc' : "A Crunchy Taco sits on a bed of warm refried beans, while the Flour Tortilla sits underneath. I like to imagine unique tacosiblings sharing a bedroom, and they each choose their bunk based on personality.",
          'size': [
            {
              'size': "SMALL",
              'price': "4.74",
              'cal': "360Cal"
            },
            {
              'size': "MEDIUM",
              'price': "5.55",
              'cal': "495Cal"
            },
            {
              'size': "LARGE",
              'price': "6.30",
              'cal': "670Cal"
            }
          ]
        },
        {
          '_id': 3,
          'name': "FUNKY CHICKEN",
          'image': "../../assets/imgs/funky chicken.jpg",
          'desc' : "A Crunchy Taco sits on a bed of warm refried beans, while the Flour Tortilla sits underneath. I like to imagine unique tacosiblings sharing a bedroom, and they each choose their bunk based on personality.",
          'size': [
            {
              'size': "SMALL",
              'price': "4.74",
              'cal': "360Cal"
            },
            {
              'size': "MEDIUM",
              'price': "5.55",
              'cal': "495Cal"
            },
            {
              'size': "LARGE",
              'price': "6.30",
              'cal': "670Cal"
            }
          ]
        },
        {
          '_id': 4,
          'name': "GARLIC PRAWN",
          'image': "../../assets/imgs/garlic prawn.jpg",
          'desc' : "A Crunchy Taco sits on a bed of warm refried beans, while the Flour Tortilla sits underneath. I like to imagine unique tacosiblings sharing a bedroom, and they each choose their bunk based on personality.",
          'size': [
            {
              'size': "SMALL",
              'price': "4.74",
              'cal': "360Cal"
            },
            {
              'size': "MEDIUM",
              'price': "5.55",
              'cal': "495Cal"
            },
            {
              'size': "LARGE",
              'price': "6.30",
              'cal': "670Cal"
            }
          ]
        }
      ]
    },
    {
      'store_id': 8,
      'menu_id': 2,
      'menu_name': "TACOS",
      'menu_image': "../../assets/imgs/menu_2_thumb.jpg",
      'sub_menus': [
        {
          '_id': 1,
          'name': "CHICKEN FAJITA",
          'image': "../../assets/imgs/chicken fajita.jpg",
          'desc' : "A Crunchy Taco sits on a bed of warm refried beans, while the Flour Tortilla sits underneath. I like to imagine unique tacosiblings sharing a bedroom, and they each choose their bunk based on personality.",
          'size': [
            {
              'size': "SMALL",
              'price': "4.74",
              'cal': "360Cal"
            },
            {
              'size': "MEDIUM",
              'price': "5.55",
              'cal': "495Cal"
            },
            {
              'size': "LARGE",
              'price': "6.30",
              'cal': "670Cal"
            }
          ]
        },
        {
          '_id': 2,
          'name': "FUNKY CHICKEN",
          'image': "../../assets/imgs/funky chicken.jpg",
          'desc' : "A Crunchy Taco sits on a bed of warm refried beans, while the Flour Tortilla sits underneath. I like to imagine unique tacosiblings sharing a bedroom, and they each choose their bunk based on personality.",
          'size': [
            {
              'size': "SMALL",
              'price': "4.74",
              'cal': "360Cal"
            },
            {
              'size': "MEDIUM",
              'price': "5.55",
              'cal': "495Cal"
            },
            {
              'size': "LARGE",
              'price': "6.30",
              'cal': "670Cal"
            }
          ]
        }
      ]
    },
    {
      'store_id': 8,
      'menu_id': 3,
      'menu_name': "COMBOS",
      'menu_image': "../../assets/imgs/menu_3_thumb.jpg",
      'sub_menus': [
        {
          '_id': 1,
          'name': "CHICKEN FAJITA",
          'image': "../../assets/imgs/chicken fajita.jpg",
          'desc' : "A Crunchy Taco sits on a bed of warm refried beans, while the Flour Tortilla sits underneath. I like to imagine unique tacosiblings sharing a bedroom, and they each choose their bunk based on personality.",
          'size': [
            {
              'size': "SMALL",
              'price': "4.74",
              'cal': "360Cal"
            },
            {
              'size': "MEDIUM",
              'price': "5.55",
              'cal': "495Cal"
            },
            {
              'size': "LARGE",
              'price': "6.30",
              'cal': "670Cal"
            }
          ]
        },
        {
          '_id': 2,
          'name': "CREAMY PRAWN",
          'image': "../../assets/imgs/creamy prawn.jpg",
          'desc' : "A Crunchy Taco sits on a bed of warm refried beans, while the Flour Tortilla sits underneath. I like to imagine unique tacosiblings sharing a bedroom, and they each choose their bunk based on personality.",
          'size': [
            {
              'size': "SMALL",
              'price': "4.74",
              'cal': "360Cal"
            },
            {
              'size': "MEDIUM",
              'price': "5.55",
              'cal': "495Cal"
            },
            {
              'size': "LARGE",
              'price': "6.30",
              'cal': "670Cal"
            }
          ]
        },
        {
          '_id': 3,
          'name': "FUNKY CHICKEN",
          'image': "../../assets/imgs/funky chicken.jpg",
          'desc' : "A Crunchy Taco sits on a bed of warm refried beans, while the Flour Tortilla sits underneath. I like to imagine unique tacosiblings sharing a bedroom, and they each choose their bunk based on personality.",
          'size': [
            {
              'size': "SMALL",
              'price': "4.74",
              'cal': "360Cal"
            },
            {
              'size': "MEDIUM",
              'price': "5.55",
              'cal': "495Cal"
            },
            {
              'size': "LARGE",
              'price': "6.30",
              'cal': "670Cal"
            }
          ]
        },
        {
          '_id': 4,
          'name': "GARLIC PRAWN",
          'image': "../../assets/imgs/garlic prawn.jpg",
          'desc' : "A Crunchy Taco sits on a bed of warm refried beans, while the Flour Tortilla sits underneath. I like to imagine unique tacosiblings sharing a bedroom, and they each choose their bunk based on personality.",
          'size': [
            {
              'size': "SMALL",
              'price': "4.74",
              'cal': "360Cal"
            },
            {
              'size': "MEDIUM",
              'price': "5.55",
              'cal': "495Cal"
            },
            {
              'size': "LARGE",
              'price': "6.30",
              'cal': "670Cal"
            }
          ]
        }
      ]
    },
    {
      'store_id': 9,
      'menu_id': 1,
      'menu_name': "PIZZA",
      'menu_image': "../../assets/imgs/menu_1_thumb.jpg",
      'sub_menus': [
        {
          '_id': 1,
          'name': "CHICKEN FAJITA",
          'image': "../../assets/imgs/chicken fajita.jpg",
          'desc' : "A Crunchy Taco sits on a bed of warm refried beans, while the Flour Tortilla sits underneath. I like to imagine unique tacosiblings sharing a bedroom, and they each choose their bunk based on personality.",
          'size': [
            {
              'size': "SMALL",
              'price': "4.74",
              'cal': "360Cal"
            },
            {
              'size': "MEDIUM",
              'price': "5.55",
              'cal': "495Cal"
            },
            {
              'size': "LARGE",
              'price': "6.30",
              'cal': "670Cal"
            }
          ]
        },
        {
          '_id': 2,
          'name': "CREAMY PRAWN",
          'image': "../../assets/imgs/creamy prawn.jpg",
          'desc' : "A Crunchy Taco sits on a bed of warm refried beans, while the Flour Tortilla sits underneath. I like to imagine unique tacosiblings sharing a bedroom, and they each choose their bunk based on personality.",
          'size': [
            {
              'size': "SMALL",
              'price': "4.74",
              'cal': "360Cal"
            },
            {
              'size': "MEDIUM",
              'price': "5.55",
              'cal': "495Cal"
            },
            {
              'size': "LARGE",
              'price': "6.30",
              'cal': "670Cal"
            }
          ]
        },
        {
          '_id': 3,
          'name': "FUNKY CHICKEN",
          'image': "../../assets/imgs/funky chicken.jpg",
          'desc' : "A Crunchy Taco sits on a bed of warm refried beans, while the Flour Tortilla sits underneath. I like to imagine unique tacosiblings sharing a bedroom, and they each choose their bunk based on personality.",
          'size': [
            {
              'size': "SMALL",
              'price': "4.74",
              'cal': "360Cal"
            },
            {
              'size': "MEDIUM",
              'price': "5.55",
              'cal': "495Cal"
            },
            {
              'size': "LARGE",
              'price': "6.30",
              'cal': "670Cal"
            }
          ]
        },
        {
          '_id': 4,
          'name': "GARLIC PRAWN",
          'image': "../../assets/imgs/garlic prawn.jpg",
          'desc' : "A Crunchy Taco sits on a bed of warm refried beans, while the Flour Tortilla sits underneath. I like to imagine unique tacosiblings sharing a bedroom, and they each choose their bunk based on personality.",
          'size': [
            {
              'size': "SMALL",
              'price': "4.74",
              'cal': "360Cal"
            },
            {
              'size': "MEDIUM",
              'price': "5.55",
              'cal': "495Cal"
            },
            {
              'size': "LARGE",
              'price': "6.30",
              'cal': "670Cal"
            }
          ]
        }
      ]
    },
    {
      'store_id': 9,
      'menu_id': 2,
      'menu_name': "TACOS",
      'menu_image': "../../assets/imgs/menu_2_thumb.jpg",
      'sub_menus': [
        {
          '_id': 1,
          'name': "CHICKEN FAJITA",
          'image': "../../assets/imgs/chicken fajita.jpg",
          'desc' : "A Crunchy Taco sits on a bed of warm refried beans, while the Flour Tortilla sits underneath. I like to imagine unique tacosiblings sharing a bedroom, and they each choose their bunk based on personality.",
          'size': [
            {
              'size': "SMALL",
              'price': "4.74",
              'cal': "360Cal"
            },
            {
              'size': "MEDIUM",
              'price': "5.55",
              'cal': "495Cal"
            },
            {
              'size': "LARGE",
              'price': "6.30",
              'cal': "670Cal"
            }
          ]
        },
        {
          '_id': 2,
          'name': "FUNKY CHICKEN",
          'image': "../../assets/imgs/funky chicken.jpg",
          'desc' : "A Crunchy Taco sits on a bed of warm refried beans, while the Flour Tortilla sits underneath. I like to imagine unique tacosiblings sharing a bedroom, and they each choose their bunk based on personality.",
          'size': [
            {
              'size': "SMALL",
              'price': "4.74",
              'cal': "360Cal"
            },
            {
              'size': "MEDIUM",
              'price': "5.55",
              'cal': "495Cal"
            },
            {
              'size': "LARGE",
              'price': "6.30",
              'cal': "670Cal"
            }
          ]
        }
      ]
    },
    {
      'store_id':9,
      'menu_id': 3,
      'menu_name': "COMBOS",
      'menu_image': "../../assets/imgs/menu_3_thumb.jpg",
      'sub_menus': [
        {
          '_id': 1,
          'name': "CHICKEN FAJITA",
          'image': "../../assets/imgs/chicken fajita.jpg",
          'desc' : "A Crunchy Taco sits on a bed of warm refried beans, while the Flour Tortilla sits underneath. I like to imagine unique tacosiblings sharing a bedroom, and they each choose their bunk based on personality.",
          'size': [
            {
              'size': "SMALL",
              'price': "4.74",
              'cal': "360Cal"
            },
            {
              'size': "MEDIUM",
              'price': "5.55",
              'cal': "495Cal"
            },
            {
              'size': "LARGE",
              'price': "6.30",
              'cal': "670Cal"
            }
          ]
        },
        {
          '_id': 2,
          'name': "CREAMY PRAWN",
          'image': "../../assets/imgs/creamy prawn.jpg",
          'desc' : "A Crunchy Taco sits on a bed of warm refried beans, while the Flour Tortilla sits underneath. I like to imagine unique tacosiblings sharing a bedroom, and they each choose their bunk based on personality.",
          'size': [
            {
              'size': "SMALL",
              'price': "4.74",
              'cal': "360Cal"
            },
            {
              'size': "MEDIUM",
              'price': "5.55",
              'cal': "495Cal"
            },
            {
              'size': "LARGE",
              'price': "6.30",
              'cal': "670Cal"
            }
          ]
        },
        {
          '_id': 3,
          'name': "FUNKY CHICKEN",
          'image': "../../assets/imgs/funky chicken.jpg",
          'desc' : "A Crunchy Taco sits on a bed of warm refried beans, while the Flour Tortilla sits underneath. I like to imagine unique tacosiblings sharing a bedroom, and they each choose their bunk based on personality.",
          'size': [
            {
              'size': "SMALL",
              'price': "4.74",
              'cal': "360Cal"
            },
            {
              'size': "MEDIUM",
              'price': "5.55",
              'cal': "495Cal"
            },
            {
              'size': "LARGE",
              'price': "6.30",
              'cal': "670Cal"
            }
          ]
        },
        {
          '_id': 4,
          'name': "GARLIC PRAWN",
          'image': "../../assets/imgs/garlic prawn.jpg",
          'desc' : "A Crunchy Taco sits on a bed of warm refried beans, while the Flour Tortilla sits underneath. I like to imagine unique tacosiblings sharing a bedroom, and they each choose their bunk based on personality.",
          'size': [
            {
              'size': "SMALL",
              'price': "4.74",
              'cal': "360Cal"
            },
            {
              'size': "MEDIUM",
              'price': "5.55",
              'cal': "495Cal"
            },
            {
              'size': "LARGE",
              'price': "6.30",
              'cal': "670Cal"
            }
          ]
        }
      ]
    },
    {
      'store_id': 10,
      'menu_id': 1,
      'menu_name': "PIZZA",
      'menu_image': "../../assets/imgs/menu_1_thumb.jpg",
      'sub_menus': [
        {
          '_id': 1,
          'name': "CHICKEN FAJITA",
          'image': "../../assets/imgs/chicken fajita.jpg",
          'desc' : "A Crunchy Taco sits on a bed of warm refried beans, while the Flour Tortilla sits underneath. I like to imagine unique tacosiblings sharing a bedroom, and they each choose their bunk based on personality.",
          'size': [
            {
              'size': "SMALL",
              'price': "4.74",
              'cal': "360Cal"
            },
            {
              'size': "MEDIUM",
              'price': "5.55",
              'cal': "495Cal"
            },
            {
              'size': "LARGE",
              'price': "6.30",
              'cal': "670Cal"
            }
          ]
        },
        {
          '_id': 2,
          'name': "CREAMY PRAWN",
          'image': "../../assets/imgs/creamy prawn.jpg",
          'desc' : "A Crunchy Taco sits on a bed of warm refried beans, while the Flour Tortilla sits underneath. I like to imagine unique tacosiblings sharing a bedroom, and they each choose their bunk based on personality.",
          'size': [
            {
              'size': "SMALL",
              'price': "4.74",
              'cal': "360Cal"
            },
            {
              'size': "MEDIUM",
              'price': "5.55",
              'cal': "495Cal"
            },
            {
              'size': "LARGE",
              'price': "6.30",
              'cal': "670Cal"
            }
          ]
        },
        {
          '_id': 3,
          'name': "FUNKY CHICKEN",
          'image': "../../assets/imgs/funky chicken.jpg",
          'desc' : "A Crunchy Taco sits on a bed of warm refried beans, while the Flour Tortilla sits underneath. I like to imagine unique tacosiblings sharing a bedroom, and they each choose their bunk based on personality.",
          'size': [
            {
              'size': "SMALL",
              'price': "4.74",
              'cal': "360Cal"
            },
            {
              'size': "MEDIUM",
              'price': "5.55",
              'cal': "495Cal"
            },
            {
              'size': "LARGE",
              'price': "6.30",
              'cal': "670Cal"
            }
          ]
        },
        {
          '_id': 4,
          'name': "GARLIC PRAWN",
          'image': "../../assets/imgs/garlic prawn.jpg",
          'desc' : "A Crunchy Taco sits on a bed of warm refried beans, while the Flour Tortilla sits underneath. I like to imagine unique tacosiblings sharing a bedroom, and they each choose their bunk based on personality.",
          'size': [
            {
              'size': "SMALL",
              'price': "4.74",
              'cal': "360Cal"
            },
            {
              'size': "MEDIUM",
              'price': "5.55",
              'cal': "495Cal"
            },
            {
              'size': "LARGE",
              'price': "6.30",
              'cal': "670Cal"
            }
          ]
        }
      ]
    },
    {
      'store_id': 10,
      'menu_id': 2,
      'menu_name': "TACOS",
      'menu_image': "../../assets/imgs/menu_2_thumb.jpg",
      'desc' : "A Crunchy Taco sits on a bed of warm refried beans, while the Flour Tortilla sits underneath. I like to imagine unique tacosiblings sharing a bedroom, and they each choose their bunk based on personality.",
          'size': [
            {
              'size': "SMALL",
              'price': "4.74",
              'cal': "360Cal"
            },
            {
              'size': "MEDIUM",
              'price': "5.55",
              'cal': "495Cal"
            },
            {
              'size': "LARGE",
              'price': "6.30",
              'cal': "670Cal"
            }
          ],
          'sub_menus' : []
    },
    {
      'store_id': 10,
      'menu_id': 3,
      'menu_name': "COMBOS",
      'menu_image': "../../assets/imgs/menu_3_thumb.jpg",
      'sub_menus': [
        {
          '_id': 1,
          'name': "CHICKEN FAJITA",
          'image': "../../assets/imgs/chicken fajita.jpg",
          'desc' : "A Crunchy Taco sits on a bed of warm refried beans, while the Flour Tortilla sits underneath. I like to imagine unique tacosiblings sharing a bedroom, and they each choose their bunk based on personality.",
          'size': [
            {
              'size': "SMALL",
              'price': "4.74",
              'cal': "360Cal"
            },
            {
              'size': "MEDIUM",
              'price': "5.55",
              'cal': "495Cal"
            },
            {
              'size': "LARGE",
              'price': "6.30",
              'cal': "670Cal"
            }
          ]
        },
        {
          '_id': 2,
          'name': "CREAMY PRAWN",
          'image': "../../assets/imgs/creamy prawn.jpg",
          'desc' : "A Crunchy Taco sits on a bed of warm refried beans, while the Flour Tortilla sits underneath. I like to imagine unique tacosiblings sharing a bedroom, and they each choose their bunk based on personality.",
          'size': [
            {
              'size': "SMALL",
              'price': "4.74",
              'cal': "360Cal"
            },
            {
              'size': "MEDIUM",
              'price': "5.55",
              'cal': "495Cal"
            },
            {
              'size': "LARGE",
              'price': "6.30",
              'cal': "670Cal"
            }
          ]
        },
        {
          '_id': 3,
          'name': "GARLIC PRAWN",
          'image': "../../assets/imgs/garlic prawn.jpg",
          'desc' : "A Crunchy Taco sits on a bed of warm refried beans, while the Flour Tortilla sits underneath. I like to imagine unique tacosiblings sharing a bedroom, and they each choose their bunk based on personality.",
          'size': [
            {
              'size': "SMALL",
              'price': "4.74",
              'cal': "360Cal"
            },
            {
              'size': "MEDIUM",
              'price': "5.55",
              'cal': "495Cal"
            },
            {
              'size': "LARGE",
              'price': "6.30",
              'cal': "670Cal"
            }
          ]
        }
      ]
    }
    ]

  //Card Menu List 
  cardMenuList = [
    {
      'name': "PIZZA",
      'subname': "FEAST | VEG DELIGHT | NON VEG | PASTA",
      'image': "../../assets/imgs/menu_1_thumb.jpg"
    },
    {
      'name': "TACOS",
      'subname': "DOUBLE DECKER | LOCOS",
      'image': "../../assets/imgs/menu_2_thumb.jpg"
    },
    {
      'name': "COMBOS",
      'subname': "MEXICAN | POWER MENU BOWL",
      'image': "../../assets/imgs/menu_3_thumb.jpg"
    },
    {
      'name': "BURRITOS",
      'subname': "BEAN | SMOTHERED | BEFFY",
      'image': "../../assets/imgs/menu_4_thumb.jpg"
    },
  ]

  //Main menu list
  mainMenu = [
    {
      id: 1,
      name: "breakfast",
      subMenu: [
        {
          id: 1,
          name: "Nachos Bellgrande Combo"
        },
        {
          id: 2,
          name: "Crunchwrap Supream Combo"
        },
        {
          id: 3,
          name: "Chessy Gordita Crunch Combo"
        }
      ]
    },
    {
      id: 2,
      name: "combos"
    },
    {
      id: 3,
      name: "tacos",
      subMenu: [
        {
          id: 1,
          name: "Nachos Bellgrande Combo"
        },
        {
          id: 2,
          name: "Crunchwrap Supream Combo"
        },
        {
          id: 3,
          name: "Chessy Gordita Crunch Combo"
        }
      ]
    },
    {
      id: 4,
      name: "burritos",
      subMenu: [
        {
          id: 1,
          name: "Nachos Bellgrande Combo"
        },
        {
          id: 2,
          name: "Crunchwrap Supream Combo"
        },
        {
          id: 3,
          name: "Chessy Gordita Crunch Combo"
        }
      ]
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