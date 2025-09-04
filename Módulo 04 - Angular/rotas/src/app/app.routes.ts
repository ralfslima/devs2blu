import { Routes } from '@angular/router';
import { Produto } from './paginas/produto/produto';
import { ProdutoDetalhes } from './paginas/produto-detalhes/produto-detalhes';

export const routes: Routes = [
    {path:'produto',                 component:Produto},
    {path:'produtodetalhes/:codigo', component:ProdutoDetalhes},
    {path:'', redirectTo:'produto',  pathMatch:'full'}
];
