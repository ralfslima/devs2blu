// Importações
import { TestBed } from "@angular/core/testing";
import { Calculos } from "./calculos";

// Descrição (Informações sobre o teste)
describe('Componente Calculos', () => {

  // Objeto do componente
  let componente : Calculos;

  // BeforeEach ou BeforeAll
  // BeforeEach -> Executado antes de cada teste (it)
  // BeforeAll  -> Executa uma ação apenas uma vez e compartilha com os testes (it)
  beforeEach(() => {
    // TestBed
    TestBed.configureTestingModule({});

    // Instanciar
    componente = new Calculos();
  });

  // Testar o método de soma
  it('Testar o método responsável pela soma', () => {
    expect(componente.somar(2, 3)).toBe(5);
  });

  // Testar o método ao quadrado
  it('Testar o método ao quadrado', () => {
    // Vetor contendo números inteiros
    const numeros = [2, 4, 6];

    // Executar método e armazenar os valores ao quadrado
    const resultado = componente.aoQuadrado(numeros);

    // Verificar o retorno do método
    expect(resultado).toEqual([4, 16, 36]);

    // Estrutura em uma única linha
    //expect(componente.aoQuadrado([2,4,6])).toEqual([4, 16, 36]);
  });

});