import { TestBed } from '@angular/core/testing';

import { Autenticacao } from './autenticacao';

describe('Autenticacao', () => {
  let service: Autenticacao;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Autenticacao);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
