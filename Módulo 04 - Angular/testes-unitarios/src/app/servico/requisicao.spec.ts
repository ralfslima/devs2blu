// Importações
import { HttpTestingController, provideHttpClientTesting } from "@angular/common/http/testing";
import { Endereco } from "../modelo/Endereco";
import { Requisicao } from "./requisicao";
import { TestBed } from "@angular/core/testing";
import { provideHttpClient } from "@angular/common/http";

// Describe
describe('Serviço de requisição (ViaCEP)', () => {

  // Mock (objeto de testes)
  const mockEndereco : Endereco = {
    "cep": "79023-320",
    "logradouro": "Rua Xavantina",
    "complemento": "",
    "unidade": "",
    "bairro": "Vila Margarida",
    "localidade": "Campo Grande",
    "uf": "MS",
    "estado": "Mato Grosso do Sul",
    "regiao": "Centro-Oeste",
    "ibge": "5002704",
    "gia": "",
    "ddd": "67",
    "siafi": "9051"
  }

  // Objetos complementares
  let requisicao : Requisicao;
  let httpMock : HttpTestingController;

  // BeforeEach
  beforeEach(() => {
    
    // TestBed
    TestBed.configureTestingModule({
      providers : [
        provideHttpClient(),
        provideHttpClientTesting(),
        Requisicao
      ]
    });

    // Inicializar os objetos
    requisicao = TestBed.inject(Requisicao);
    httpMock = TestBed.inject(HttpTestingController);

  });

  // Realizar teste
  it('Testar o método responsável pela consulta ViaCEP', () => {
    
    requisicao.consultarEndereco('79023320').subscribe(endereco => {
      expect(endereco.cep).toBe(mockEndereco.cep);
      expect(endereco.logradouro).toBe(mockEndereco.logradouro);
      expect(endereco.complemento).toBe(mockEndereco.complemento);
      expect(endereco.unidade).toBe(mockEndereco.unidade);
      expect(endereco.bairro).toBe(mockEndereco.bairro);
      expect(endereco.localidade).toBe(mockEndereco.localidade);
      expect(endereco.uf).toBe(mockEndereco.uf);
      expect(endereco.estado).toBe(mockEndereco.estado);
      expect(endereco.regiao).toBe(mockEndereco.regiao);
      expect(endereco.ibge).toBe(mockEndereco.ibge);
      expect(endereco.gia).toBe(mockEndereco.gia);
      expect(endereco.ddd).toBe(mockEndereco.ddd);
      expect(endereco.siafi).toBe(mockEndereco.siafi);
    });

    // Executar a requisição
    const executarRequisicao = httpMock.expectOne('https://viacep.com.br/ws/79023320/json');
    expect(executarRequisicao.request.method).toBe('GET');
    executarRequisicao.flush(mockEndereco);

  });

});