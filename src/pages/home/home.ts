import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ConexaoApiProvider } from "../../providers/conexao-api/conexao-api";


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  dados = [{"nome":"", razaoSocial:"", id:"", cep:"", cnpj:""}];
  

  constructor(public navCtrl: NavController,
              public conexaoAPI:ConexaoApiProvider) {

  }
  buscar(){
    //envia o GET com o COOKIE 
      this.conexaoAPI.httpGet("https://lukre.me/ws/app/private/company/branch/list", document.cookie.toString())
      .subscribe(result =>{
              let res = result.json();
              if(res.status==="OK"){
                 //recupera os dados e navega no JSON passando a lista de filiais para a repetição do for no home.html
                 this.dados = res.response.filiais;
              }
              else alert('erro');
      },err =>{
        alert(err);
      });

  }
}

