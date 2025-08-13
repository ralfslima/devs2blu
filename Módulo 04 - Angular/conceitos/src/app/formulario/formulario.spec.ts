import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Formulario } from './formulario';

describe('Formulario', () => {
  let component: Formulario;
  let fixture: ComponentFixture<Formulario>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Formulario]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Formulario);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
