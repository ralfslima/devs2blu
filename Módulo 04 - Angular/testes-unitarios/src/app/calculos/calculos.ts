import { Component } from '@angular/core';

@Component({
  selector: 'app-calculos',
  imports: [],
  templateUrl: './calculos.html',
  styleUrl: './calculos.css'
})
export class Calculos {

  // Método para somar
  somar(numero1:number, numero2:number):number{
    return numero1+numero2;
  }

  // Método para retornar uma lista de números elevada ao quadrado
  aoQuadrado(numeros:number[]):number[]{
    return numeros.map(n => n * n);
  }

}
