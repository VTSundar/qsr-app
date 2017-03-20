import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { TestPage } from '../pages/test/test';
import { LocationMapPage } from '../pages/location/location';
import { detStore } from '../pages/detStore/detStore';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { Providers } from '../providers/provider';
import { StartScreenPage } from '../pages/startscreen/startscreen';
import {LoginPage} from '../pages/login/login';
import {SignupPage} from '../pages/signup/signup';
import {StoreItemsPage} from '../pages/storeItems/storeItems';
import {StoreDetailsPage} from '../pages/storeDetails/storeDetails';
import { AppService } from '../providers/app-service';
import {StoreSubmenuPage} from '../pages/storeSubmenu/storeSubmenu';
import {CustomizationPage} from '../pages/customizationList/customizationList';
import {PaymentCartPage} from '../pages/paymentCart/paymentCart';
import { paymentScreen } from '../pages/paymentScreen/paymentScreen';
import { RewardsOfferPage } from '../pages/rewardOffer/rewardOffer';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { StoreMainMenuPage } from '../pages/storeMainMenu/storeMainMenu';
import { StoreLocation } from '../pages/storeLocation/storeLocation';
import { ListStores } from '../pages/listStores/listStores';
import { MyCouponPage } from '../pages/myCoupon/myCoupon';
import { Profile } from '../pages/profile/profile';
import { myLoyaltyPage } from '../pages/myLoyalty/myLoyalty';
import { AddCard } from '../pages/addCard/addCard';

@NgModule({
  declarations: [
    MyApp,
    TestPage,
    LocationMapPage,
    StartScreenPage,
    LoginPage,
    SignupPage,
    StoreItemsPage,
    StoreDetailsPage,
    detStore,
    CustomizationPage,
    PaymentCartPage,
    paymentScreen,
    StoreSubmenuPage,
    CustomizationPage,
    RewardsOfferPage,
    DashboardPage,
    StoreMainMenuPage,
    StoreLocation,
    ListStores,
    MyCouponPage,
    AddCard,
    Profile,
    myLoyaltyPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAv1Opv50XHlMA7SRS0ut7U8Sr19WRWurE'
    }),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TestPage,
    LocationMapPage,
    StartScreenPage,
    LoginPage,
    SignupPage,
    StoreItemsPage,
    StoreDetailsPage,
    detStore,
    CustomizationPage,
    PaymentCartPage,
    paymentScreen,
    StoreSubmenuPage,
    RewardsOfferPage,
    DashboardPage,
    StoreMainMenuPage,
    StoreLocation,
    ListStores,
    MyCouponPage,
    AddCard,
    Profile,
    myLoyaltyPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler},Providers, AppService]
})
export class AppModule {}
