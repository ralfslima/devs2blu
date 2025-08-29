import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Pessoa } from '../modelo/Pessoa';

@Component({
  selector: 'app-formulario-cadastro',
  imports: [FormsModule],
  templateUrl: './formulario-cadastro.html',
  styleUrl: './formulario-cadastro.css'
})
export class FormularioCadastro {

  // Variáveis
  nome:string = '';
  cidade:string = '';

  // Implementar @Output (Ter acesso ao método de cadastro do componente pai)
  @Output() adicionar = new EventEmitter<Pessoa>();

  // Método de cadastro do componente formulario-cadastro
  cadastrar():void{
    // Criar objeto do tipo Pessoa
    let p = new Pessoa();
    p.nome = this.nome;
    p.cidade = this.cidade;

    // Enviar objeto para o @Output (adicionar)
    this.adicionar.emit(p);

    // Limpar os campos
    this.nome   = '';
    this.cidade = '';
  }

}
