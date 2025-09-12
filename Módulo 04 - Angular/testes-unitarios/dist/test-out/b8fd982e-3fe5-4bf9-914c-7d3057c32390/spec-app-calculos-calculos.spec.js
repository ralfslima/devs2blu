import {
  Component,
  TestBed,
  __decorate,
  init_core,
  init_testing,
  init_tslib_es6
} from "./chunk-F5QLDZ5X.js";
import {
  __name
} from "./chunk-SK4CH4QL.js";

// src/app/calculos/calculos.spec.ts
init_testing();

// src/app/calculos/calculos.ts
init_tslib_es6();

// angular:jit:template:src/app/calculos/calculos.html
var calculos_default = "<p>calculos works!</p>\n";

// angular:jit:style:src/app/calculos/calculos.css
var calculos_default2 = "/* src/app/calculos/calculos.css */\n/*# sourceMappingURL=calculos.css.map */\n";

// src/app/calculos/calculos.ts
init_core();
var _a;
var Calculos = (_a = class {
  // Método para somar
  somar(numero1, numero2) {
    return numero1 + numero2;
  }
  // Método para retornar uma lista de números elevada ao quadrado
  aoQuadrado(numeros) {
    return numeros.map((n) => n * n);
  }
}, __name(_a, "Calculos"), _a);
Calculos = __decorate([
  Component({
    selector: "app-calculos",
    imports: [],
    template: calculos_default,
    styles: [calculos_default2]
  })
], Calculos);

// src/app/calculos/calculos.spec.ts
describe("Componente Calculos", () => {
  let componente;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    componente = new Calculos();
  });
  it("Testar o m\xE9todo respons\xE1vel pela soma", () => {
    expect(componente.somar(2, 3)).toBe(5);
  });
  it("Testar o m\xE9todo ao quadrado", () => {
    const numeros = [2, 4, 6];
    const resultado = componente.aoQuadrado(numeros);
    expect(resultado).toEqual([4, 16, 36]);
  });
});
//# sourceMappingURL=spec-app-calculos-calculos.spec.js.map
