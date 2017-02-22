import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { storeHomePage } from '../pages/storeHomePage/storeHomePage';
import { LoginPage } from '../pages/login/login';
import { RegistrationPage } from '../pages/registration/registration';
import { HeaderPage } from '../pages/header/header';
import { StoreItemsPage } from '../pages/storeItemsPage/storeItemsPage';
import { Providers } from '../providers/provider';
import { RestraFind } from '../pages/restrafind/restrafind';
import { LocationMapPage } from '../pages/location/location';
import { ListFavPage } from '../pages/listfav/listfav';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { SelectMenuPage } from '../pages/selectmenu/selectmenu';
import { StartscreenPage } from '../pages/startscreen/startscreen';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    storeHomePage,
    LoginPage,
    RegistrationPage,
    HeaderPage,
    StoreItemsPage,
    RestraFind,
    SelectMenuPage,
    LocationMapPage,
    ListFavPage,
    StartscreenPage
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
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    storeHomePage,
    LoginPage,
    RegistrationPage,
    HeaderPage,
    StoreItemsPage,
    RestraFind,
    SelectMenuPage,
    LocationMapPage,
    ListFavPage,
    StartscreenPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler},Providers]
})
export class AppModule {}
