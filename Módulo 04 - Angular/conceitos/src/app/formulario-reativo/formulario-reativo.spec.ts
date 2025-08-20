import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioReativo } from './formulario-reativo';

describe('FormularioReativo', () => {
  let component: FormularioReativo;
  let fixture: ComponentFixture<FormularioReativo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioReativo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioReativo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
