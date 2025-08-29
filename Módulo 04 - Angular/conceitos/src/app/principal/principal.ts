import { Component } from '@angular/core';
import { FormularioCadastro } from "../formulario-cadastro/formulario-cadastro";
import { TabelaListagem } from "../tabela-listagem/tabela-listagem";
import { CommonModule } from '@angular/common';
import { Pessoa } from '../modelo/Pessoa';

@Component({
  selector: 'app-principal',
  imports: [FormularioCadastro, TabelaListagem, CommonModule],
  templateUrl: './principal.html',
  styleUrl: './principal.css'
})
export class Principal {

  // Vetor de pessoas
  pessoas:Pessoa[] = [];

  // Função para cadastrar pessoas
  cadastrar(pessoa:Pessoa):void{
    this.pessoas.push(pessoa);
  }

  // Função para remover pessoas
  remover(indice:number):void{
    this.pessoas.splice(indice, 1);
  }

}
