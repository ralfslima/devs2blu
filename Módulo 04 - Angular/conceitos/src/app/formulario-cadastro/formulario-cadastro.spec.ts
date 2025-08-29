import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioCadastro } from './formulario-cadastro';

describe('FormularioCadastro', () => {
  let component: FormularioCadastro;
  let fixture: ComponentFixture<FormularioCadastro>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioCadastro]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioCadastro);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
