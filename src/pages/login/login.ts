import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ConexaoApiProvider } from "../../providers/conexao-api/conexao-api";
import { HomePage } from "../home/home";

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  userData = {"email": "diogoanalistasz@gmail.com","senha": "admin"};
  responseData: any;
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public conexaoAPI:ConexaoApiProvider) {
  }

  ionViewDidLoad() {
  }

  logar(){
    this.conexaoAPI.postData(this.userData,"public/company/login/").then(result =>{
      this.responseData = result;
      if(this.responseData.status){
        localStorage.setItem('userData', JSON.stringify(this.responseData));


        
        this.navCtrl.push(HomePage);
      }
      else alert("login ou senha inválido");
    }, err =>{});
    
  }

}
