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
  denuncia: {};

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private geolocation: Geolocation,
            ) {
    this.selectedItem = navParams.get('item');
  }

  getGeo(){
    this.geolocation.getCurrentPosition().then((resp) => {
      let myJson = {
        "descripcion" : this.denuncia,
        "latitud": resp.coords.latitude,
        "longitud" : resp.coords.longitude
      }

      var xmlhttp = new XMLHttpRequest();
      var url = "http://ec2-52-15-226-254.us-east-2.compute.amazonaws.com:8080/helpym/webresources/denuncias/";

      xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
          var myArr = JSON.parse(this.responseText);
          console.log(myArr);
      }
    };

      xmlhttp.open("GET", url, true);
      xmlhttp.send();


    }).catch((error) => {
      console.log('Error getting location', error);
    });
  }

  sendInfo() {
    this.getGeo();
  }
}
