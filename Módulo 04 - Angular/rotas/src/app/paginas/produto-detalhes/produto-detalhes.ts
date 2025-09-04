import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-produto-detalhes',
  imports: [CommonModule],
  templateUrl: './produto-detalhes.html',
  styleUrl: './produto-detalhes.css'
})
export class ProdutoDetalhes {

  // Variável para armazenar o código
  codigo:number = 0;

  // Construtor
  constructor(private ar:ActivatedRoute){}

  // Vetor
  produtos:any[] = [
    {nome:'Notebook Dell Inspiron', valor:4890.90, imagem:'1.jpg', descricao:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'},
    {nome:'Notebook Dell Optiplex', valor:3664.68, imagem:'2.png', descricao:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'},
    {nome:'Notebook Acer', valor:5899.99, imagem:'3.webp', descricao:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'}
  ]

  // Produto selecionado
  nome:string = '';
  valor:number = 0;
  imagem:string = '';
  descricao:string = '';

  // ngOnInit
  ngOnInit():void{
    // Caso a rota seja acessada pela segunda vez consecutiva, o código não é atualizado
    //this.codigo = Number(this.ar.snapshot.paramMap.get('codigo'));

    // Caso a rota seja acessada pela segunda vez consecutiva, o código será atualizado
    this.ar.paramMap.subscribe(p => this.codigo = Number(p.get('codigo'))-1);

    // Obter os dados do produto selecionado
    this.nome = this.produtos[this.codigo].nome;
    this.valor = this.produtos[this.codigo].valor;
    this.imagem = this.produtos[this.codigo].imagem;
    this.descricao = this.produtos[this.codigo].descricao;
  }

}
