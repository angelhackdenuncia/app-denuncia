import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Geolocation } from '@ionic-native/geolocation';

@Component({
  selector: 'page-third',
  templateUrl: 'thirdScreen.html',
  providers: [Geolocation]
})
export class thirdScreenPage {
  selectedItem: any;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private geolocation: Geolocation ) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');
    // Let's populate this page with some filler content for funzies

  }

  getGeo(){
    this.geolocation.getCurrentPosition().then((resp) => {
 // resp.coords.latitude
 // resp.coords.longitude
      console.log(resp.coords.latitude,resp.coords.longitude) 
    }).catch((error) => {
      console.log('Error getting location', error);
    });
  }

  sendInfo() {
    this.getGeo()
  }


}
