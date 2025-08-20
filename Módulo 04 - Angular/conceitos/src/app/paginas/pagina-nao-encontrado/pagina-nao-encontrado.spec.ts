import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaNaoEncontrado } from './pagina-nao-encontrado';

describe('PaginaNaoEncontrado', () => {
  let component: PaginaNaoEncontrado;
  let fixture: ComponentFixture<PaginaNaoEncontrado>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginaNaoEncontrado]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaNaoEncontrado);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
