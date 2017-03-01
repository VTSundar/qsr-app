import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

// import { TabsPage } from '../pages/tabs/tabs';
import { StartscreenPage } from '../pages/startscreen/startscreen';
import { CardMenuPage } from '../pages/cardmenu/cardmenu';
// import { LoginPage } from '../pages/login/login';
// import { RegistrationPage } from '../pages/registration/registration';
// import { ItemDetailPage } from '../pages/itemDetail/itemDetail';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage = StartscreenPage;
  // rootPage = CardMenuPage;

  constructor(platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }
}
