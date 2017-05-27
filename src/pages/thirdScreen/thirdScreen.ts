import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-third',
  templateUrl: 'thirdScreen.html'
})
export class thirdScreenPage {
  selectedItem: any;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');
    // Let's populate this page with some filler content for funzies

  }

}
