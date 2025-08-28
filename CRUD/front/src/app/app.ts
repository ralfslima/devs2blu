import { Component, signal } from '@angular/core';
import { Crud } from "./crud/crud";

@Component({
  selector: 'app-root',
  imports: [Crud],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('front');
}
