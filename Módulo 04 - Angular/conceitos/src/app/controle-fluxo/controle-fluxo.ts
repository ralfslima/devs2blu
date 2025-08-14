import { Component } from '@angular/core';

@Component({
  selector: 'app-controle-fluxo',
  imports: [],
  templateUrl: './controle-fluxo.html',
  styleUrl: './controle-fluxo.css'
})
export class ControleFluxo {
  media:number = 8;

  linguagem:string = 'Java';

  nomes:string[] = [];
}
