import { Routes } from '@angular/router';
import { Produto } from './paginas/produto/produto';
import { ProdutoDetalhes } from './paginas/produto-detalhes/produto-detalhes';
import { Login } from './paginas/login/login';
import { Admin } from './paginas/admin/admin';
import { autenticacaoGuard } from './autenticacao-guard';

export const routes: Routes = [
    {path:'produto',                 component:Produto},
    {path:'produtodetalhes/:codigo', component:ProdutoDetalhes},
    {path:'login',                   component:Login},
    {path:'admin',                   component:Admin,      canActivate:[autenticacaoGuard]},              
    {path:'', redirectTo:'produto',  pathMatch:'full'}
];
