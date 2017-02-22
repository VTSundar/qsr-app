import { Component } from '@angular/core';

import { NavController , LoadingController} from 'ionic-angular';

import { storeHomePage } from '../storeHomePage/storeHomePage';
import { LoginPage } from '../login/login';
import { RegistrationPage } from '../registration/registration';
import { Hero } from '../../app/hero';
import { HeroService } from '../../app/hero.service';
import { AppService } from '../../app/app.service';
import { RestraFind } from '../restrafind/restrafind'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [HeroService, AppService]
})
export class HomePage {
  heroes: Hero[];

  constructor(public navCtrl: NavController, private heroService: HeroService, private AppService: AppService,public loadingCtrl: LoadingController) {
    
  }

  openLoginPage(event){
    this.navCtrl.push(LoginPage);
  }
  openRegistrationPage(event){
    this.navCtrl.push(RegistrationPage);
  }
  openStoreHomePage(event){
    this.navCtrl.push(storeHomePage);
  }
  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => {
      this.heroes = heroes;
      console.log("home page", this.heroes);
    });
    var val = this.AppService.getStoreList();
    console.log("home page val", val);
  }
  ngOnInit(): void {
    this.getHeroes();
  }

  createAccount(){
    this.loadingCtrl.create({
      content: 'Please wait...',
      duration: 3000,
      // dismissOnPageChange: true
    }).present();
        this.navCtrl.push(RestraFind);
    }

}
