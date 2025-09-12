import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pagina } from './pagina';

describe('Pagina', () => {
  let component: Pagina;
  let fixture: ComponentFixture<Pagina>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pagina]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pagina);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
