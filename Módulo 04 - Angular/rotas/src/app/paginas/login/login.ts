import { Component } from '@angular/core';
import { Autenticacao } from '../../servicos/autenticacao';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  // Construtor
  constructor(private servico:Autenticacao, private router:Router){}

  // Método para efetuar o login
  logar():void{
    this.servico.login('meu-token');
    this.router.navigateByUrl('/admin');
  }


}
