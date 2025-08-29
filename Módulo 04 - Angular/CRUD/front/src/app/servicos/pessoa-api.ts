import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pessoa } from '../modelo/Pessoa';

@Injectable({
  providedIn: 'root'
})
export class PessoaApi {

  // URL da API
  private url:string = 'http://localhost:3000/pessoas/';

  // Construtor
  constructor(private http:HttpClient){}

  // Listar todas as pessoas
  listar():Observable<Pessoa[]>{
    return this.http.get<Pessoa[]>(this.url);
  }

  // Cadastrar pessoas
  cadastrar(pessoa:Pessoa):Observable<Pessoa>{
    return this.http.post<Pessoa>(this.url, JSON.stringify(pessoa));
  }

  // Selecionar pessoa por id
  selecionarPessoa(id:string):Observable<Pessoa>{
    //return this.http.get<Pessoa>(this.url + id);
    return this.http.get<Pessoa>(`${this.url}${id}`);
  }

  // Alterar pessoas
  alterar(pessoa:Pessoa):Observable<Pessoa>{
    return this.http.put<Pessoa>(this.url+pessoa.id, JSON.stringify(pessoa));
  }

  // Remover pessoas
  remover(id:string):Observable<Pessoa>{
    return this.http.delete<Pessoa>(this.url+id);
  }

}


/*
  RxJS:
  - Observable: Executor
  - Subscribe: Recebedor
*/