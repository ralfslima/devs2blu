import { Component } from '@angular/core';
import { Language, TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-pagina',
  imports: [TranslateModule],
  templateUrl: './pagina.html',
  styleUrl: './pagina.css'
})
export class Pagina {

  // Construtor
  constructor(private translate:TranslateService){

    // Obter o idioma do navegador
    const idiomaNavegador = navigator.language;

    // Definir o idioma da página
    translate.use(idiomaNavegador);
  }

  // Método para alterar o idioma
  alterarIdioma(idioma:Language) {
    this.translate.use(idioma);
  }

}
