import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, ToastController  } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

@Component({
  selector: 'page-third',
  templateUrl: 'thirdScreen.html',
  providers: [Geolocation],
})


export class thirdScreenPage {
  selectedItem: any;
  denuncia: {};
  numero: {};
  califica: boolean;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private geolocation: Geolocation,
              public alertCtrl: AlertController,
              public toastCtrl: ToastController
            ) {
    this.selectedItem = navParams.get('item');
    this.califica = false;
  }

  getGeo(){
    this.geolocation.getCurrentPosition().then((resp) => {
      let myJson = {
        "descripcion" : this.denuncia,
        "latitud": resp.coords.latitude,
        "longitud" : resp.coords.longitude
      }

      var xmlhttp = new XMLHttpRequest();
      var url = "http://ec2-52-15-226-254.us-east-2.compute.amazonaws.com:8080/helpym/webresources/denuncias/put";

      let alertme: any = this.showAlert;
      let thiz: any = this.alertCtrl;

      this.califica = true;

      xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
          var myArr = JSON.parse(this.responseText);
          console.log(myArr.recomendacion);
          alertme(myArr.recomendacion, thiz)
        }
      };
      xmlhttp.open("PUT", url, true);
      xmlhttp.setRequestHeader("Content-Type", "application/json");
      xmlhttp.send(JSON.stringify(myJson));

    }).catch((error) => {
      console.log('Error getting location', error);
    });
  }

   showAlert(txtRta: string, thiz: any) {
     let alert = thiz.create({
       title: 'Mi recomendacion',
       subTitle: txtRta,
       buttons: ['OK']
     });
     alert.present();
   }

  getCalifica(){
    this.califica = false;

    let toast = this.toastCtrl.create({
      message: 'Gracias por su voto',
      duration: 3000,
       position: 'middle'
    });

    toast.present();

    let califica = {
      "calificacion" : this.numero,
    }


  }

  sendInfo() {
    this.getGeo();
  }
}
