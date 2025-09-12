import { Component, signal } from '@angular/core';
import { Pagina } from "./pagina/pagina";

@Component({
  selector: 'app-root',
  imports: [Pagina],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('internacionalizacao');
}
