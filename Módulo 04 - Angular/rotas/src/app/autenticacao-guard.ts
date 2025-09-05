import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const autenticacaoGuard: CanActivateFn = (route, state) => {
  
  // Constante para inicializar um objeto
  const r = inject(Router);

  // Capturar o 'token' no LocalStorage
  const token = localStorage.getItem('token');

  // Redirecionamento
  if(token){
    return true;
  }else{
    //r.navigateByUrl('/produto');
    r.navigate(['produto']);
    return false;
  }

};
