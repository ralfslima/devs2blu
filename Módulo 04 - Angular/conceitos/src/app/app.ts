import { Component, signal } from '@angular/core';
import { Diretivas } from "./diretivas/diretivas";

@Component({
  selector: 'app-root',
  imports: [Diretivas],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('conceitos');
}
