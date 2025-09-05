import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Autenticacao {
  
  // Objeto para verificar se há token no LocalStorage
  autenticarToken = new BehaviorSubject<boolean>(this.verificarToken());

  // Método que verifica se há token
  verificarToken():boolean{
    // 1ª maneira
    // if(localStorage.getItem('token')){
    //   return true;
    // }else{
    //   return false;
    // }

    // 2ª maneira
    //return localStorage.getItem('token') ? true : false;

    // 3ª maneira (truthy e falsy)
    // True: Se houver letras, números, valores lógicos, vetores, etc...
    // False: '', null, undefined...
    return !!localStorage.getItem('token');
  }

  // Método para realizar o login (Criar o token)
  login(token:string):void{
    localStorage.setItem('token', token);
    this.autenticarToken.next(true);
  }

  // Método para realizar o logoff (Remover o token)
  logoff():void{
    localStorage.removeItem('token');
    this.autenticarToken.next(false);
  }

}
