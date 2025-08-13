import { Component, signal } from '@angular/core';
import { Formulario } from "./formulario/formulario";

@Component({
  selector: 'app-root',
  imports: [Formulario],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('conceitos');
}
