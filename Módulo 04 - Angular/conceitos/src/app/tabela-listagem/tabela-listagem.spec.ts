import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaListagem } from './tabela-listagem';

describe('TabelaListagem', () => {
  let component: TabelaListagem;
  let fixture: ComponentFixture<TabelaListagem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabelaListagem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabelaListagem);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
