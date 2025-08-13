import { Component } from '@angular/core';

@Component({
  selector: 'app-data-bindings',
  imports: [],
  templateUrl: './data-bindings.html',
  styleUrl: './data-bindings.css'
})
export class DataBindings {
  // Imagem
  imagem:string = 'dia.jpg';

  // Função para alterar a imagem
  funcao():void{
    // 1ª maneira
    if(this.imagem === 'dia.jpg'){
      this.imagem = 'noite.jpg';
    }else{
      this.imagem = 'dia.jpg';
    }

    // 2ª maneira
    //this.imagem = this.imagem === 'dia.jpg' ? 'noite.jpg' : 'dia.jpg';
  }

}
