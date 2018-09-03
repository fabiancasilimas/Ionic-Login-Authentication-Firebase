import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { User } from '../../models/user';
import { AngularFireAuth } from "angularfire2/auth";

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  user = {} as User; 
  constructor(private afAuth: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams, private toast: ToastController) {
  }
  //Is function registration page 
  register(){
    this.navCtrl.push('RegisterPage');
  }
  //Is function login page  
  //wait for a piece of the delivery promise typescrip async 
  async login(user: User) {
    try {
    const result = this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password);
    console.log(result);
    if (result){
      this.navCtrl.setRoot('HomePage');
      }
      else{
        this.toast.create({
          message:'Error de Usuario o Contraseña',
          duration:3000
        }).present();
      }
    }
    catch(e)
    {
      console.error(e);
    }
     
  }

}

