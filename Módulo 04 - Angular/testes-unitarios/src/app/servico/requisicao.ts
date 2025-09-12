import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Endereco } from '../modelo/Endereco';

@Injectable({
  providedIn: 'root'
})
export class Requisicao {

  // URL da API
  private url:string = 'https://viacep.com.br/ws/';

  // Construtor
  constructor(private http: HttpClient){}

  // Consultar o endereço
  consultarEndereco(cep: string):Observable<Endereco>{
    return this.http.get<Endereco>(`${this.url}${cep}/json`);
    //return this.http.get<Endereco>(this.url + cep + '/json');
  }
  
}
