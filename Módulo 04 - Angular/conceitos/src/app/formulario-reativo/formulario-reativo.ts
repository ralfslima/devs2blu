import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-reativo',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './formulario-reativo.html',
  styleUrl: './formulario-reativo.css'
})
export class FormularioReativo {
  
  // Objeto
  pessoa = new FormGroup({
    nome:  new FormControl('', [Validators.required, Validators.minLength(3)]),
    idade: new FormControl('', [Validators.required, Validators.min(0), Validators.max(120)])
  });

  // Ciclo de vida (executa após o componente ser criado/montado)
  ngOnInit():void{
    alert('Executando uma ação ao carregar o componente.');
  }
  
}
