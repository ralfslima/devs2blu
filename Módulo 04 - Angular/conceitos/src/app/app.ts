import { Component, signal } from '@angular/core';
import { Principal } from "./principal/principal";

@Component({
  selector: 'app-root',
  imports: [Principal],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('conceitos');
}
