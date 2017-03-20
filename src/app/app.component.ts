import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

// import { TestPage } from '../pages/test/test';
// import { StartScreenPage } from '../pages/startscreen/startscreen';
// import { StoreDetailsPage } from '../pages/storeDetails/storeDetails';
// import { LocationMapPage } from '../pages/location/location';
// import { StoreItemsPage } from '../pages/storeItems/storeItems';
// import { StoreSubmenuPage } from '../pages/storeSubmenu/storeSubmenu';
// import { LocationMapPage } from '../pages/location/location';
// import { paymentScreen } from '../pages/paymentScreen/paymentScreen';
// import { StartScreenPage } from '../pages/startscreen/startscreen';
// import { RewardsOfferPage } from '../pages/rewardOffer/rewardOffer';
import { StartScreenPage } from '../pages/startscreen/startscreen';
// import { DashboardPage } from '../pages/dashboard/dashboard';
// import { StoreMainMenuPage } from '../pages/storeMainMenu/storeMainMenu';
// import { MyCouponPage } from '../pages/myCoupon/myCoupon';
// import { Profile } from '../pages/profile/profile';
// import { myLoyaltyPage } from '../pages/myLoyalty/myLoyalty';
import { GiftCardPage } from '../pages/giftCard/giftCard';
import { CardDesignPage } from '../pages/cardDesign/cardDesign';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage = CardDesignPage;

  constructor(platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }
}
