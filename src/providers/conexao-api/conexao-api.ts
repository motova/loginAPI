import { Injectable } from '@angular/core';

import { Http, Headers } from '@angular/http';
import { AlertController } from 'ionic-angular';
import 'rxjs/add/operator/map';

let apiUrl = 'https://lukre.me/ws/app/';
@Injectable()
export class ConexaoApiProvider {
  
  constructor(public http: Http, public alertCtrl: AlertController) {
    
  }

  postData(body, type) {
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      headers.append("Content-Type","application/json");
      this.http.post(apiUrl + type,JSON.stringify(body), {headers})
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });

  }
  public httpGet(url: string, cookieHeader){

   let headers = new Headers();

   headers.append("Access-Control-Allow-Origin", "*");    
   headers.append("Access-Control-Allow-Methods", "GET, POST, DELETE, PUT");          
   headers.append("Access-Control-Allow-Headers", "origin, content-type, accept, authorization");
   headers.append("Access-Control-Allow-Credentials", "true");
   headers.append('Content-type', 'application/json; charset=UTF-8');
   headers.append('Cookies', cookieHeader);


    return this.http.get(url, {headers});
  }

  public sendAlert(msg: string, titulo: string) {
    let alert = this.alertCtrl.create({
      title: titulo,
      subTitle: msg,
      buttons: ['OK']
    });
    alert.present();
  }
}
