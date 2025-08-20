import { Routes } from '@angular/router';
import { Pagina1 } from './paginas/pagina1/pagina1';
import { Pagina2 } from './paginas/pagina2/pagina2';
import { Pagina3 } from './paginas/pagina3/pagina3';
import { PaginaNaoEncontrado } from './paginas/pagina-nao-encontrado/pagina-nao-encontrado';

export const routes: Routes = [
    {path:'pagina1', component:Pagina1},
    {path:'pagina2', component:Pagina2},
    {path:'pagina3', component:Pagina3},
    {path:'', redirectTo:'pagina1', pathMatch:'full'},
    {path:'**', component:PaginaNaoEncontrado}
];
