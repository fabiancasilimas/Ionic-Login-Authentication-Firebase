import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(private afAuth: AngularFireAuth, private toast: ToastController, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewWillLoad() {
    this.afAuth.authState.subscribe(data => {
      if (data && data.email && data.uid) {
        this.toast.create({
          message: `Bienvenido a APP_NAME, ${data.email}`,
          duration: 3000,
          position: 'top'
      }).present();
    }
  else {
  this.toast.create({
    message: `Error al iniciar sesión`,
    duration: 3000,
    position: 'top'
  }).present();
}
console.log(data)

});
}

}