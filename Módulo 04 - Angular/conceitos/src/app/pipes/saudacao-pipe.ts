import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'saudacao'
})
export class SaudacaoPipe implements PipeTransform {

  transform(nome:string): string {
    //return 'Olá '+nome+'!';
    return `Olá ${nome}!`;
  }

}
