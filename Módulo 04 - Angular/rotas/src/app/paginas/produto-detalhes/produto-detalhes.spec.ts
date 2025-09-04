import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutoDetalhes } from './produto-detalhes';

describe('ProdutoDetalhes', () => {
  let component: ProdutoDetalhes;
  let fixture: ComponentFixture<ProdutoDetalhes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProdutoDetalhes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProdutoDetalhes);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
