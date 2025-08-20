import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-roteamento',
  imports: [RouterOutlet, RouterLink, MatButtonModule],
  templateUrl: './roteamento.html',
  styleUrl: './roteamento.css'
})
export class Roteamento {

}
