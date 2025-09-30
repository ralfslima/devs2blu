import { TestBed } from '@angular/core/testing';

import { PessoaApi } from './pessoa-api';

describe('PessoaApi', () => {
  let service: PessoaApi;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PessoaApi);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
