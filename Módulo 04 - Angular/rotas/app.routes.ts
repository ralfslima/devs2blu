import { Routes } from '@angular/router';
import { Produto } from './paginas/produto/produto';
import { autenticacaoGuard } from './autenticacao-guard';

export const routes: Routes = [
    {path:'produto',                 component:Produto},
    {path:'produtodetalhes/:codigo', loadComponent : () => import('./paginas/produto-detalhes/produto-detalhes').then(componente => componente.ProdutoDetalhes)},             
    {path:'login',                   loadComponent : () => import('./paginas/login/login').then(componente => componente.Login)},
    {path:'admin',                   loadComponent : () => import('./paginas/admin/admin').then(componente => componente.Admin),      canActivate:[autenticacaoGuard]},              
    {path:'', redirectTo:'produto',  pathMatch:'full'}
];
