import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Autenticacao } from '../../servicos/autenticacao';

@Component({
  selector: 'app-menu',
  imports: [RouterLink],
  templateUrl: './menu.html',
  styleUrl: './menu.css'
})
export class Menu {

  // Variável para verificar a existência do token
  existeToken:boolean = false;

  // Construtor
  constructor(private router:Router, private servico:Autenticacao){}

  // Método para sair (logoff)
  sair():void{
    this.servico.logoff();
    this.router.navigateByUrl('/produto');
  }

  // Método para verificar se o token está disponível
  verificarToken():void{
    this.servico.autenticarToken.subscribe(valor => this.existeToken = valor);
  }

  // ngOnInit
  ngOnInit():void{
    this.verificarToken();
  }

}
