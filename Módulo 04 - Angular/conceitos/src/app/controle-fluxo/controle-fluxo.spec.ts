import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControleFluxo } from './controle-fluxo';

describe('ControleFluxo', () => {
  let component: ControleFluxo;
  let fixture: ComponentFixture<ControleFluxo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ControleFluxo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ControleFluxo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
