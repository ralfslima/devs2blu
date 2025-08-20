import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Roteamento } from './roteamento';

describe('Roteamento', () => {
  let component: Roteamento;
  let fixture: ComponentFixture<Roteamento>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Roteamento]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Roteamento);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
