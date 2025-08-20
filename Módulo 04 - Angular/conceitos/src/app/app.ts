import { Component, signal } from '@angular/core';
import { Roteamento } from "./roteamento/roteamento";

@Component({
  selector: 'app-root',
  imports: [Roteamento],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('conceitos');
}
