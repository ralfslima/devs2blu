import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { autenticacaoGuard } from './autenticacao-guard';

describe('autenticacaoGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => autenticacaoGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
