import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pagina1 } from './pagina1';

describe('Pagina1', () => {
  let component: Pagina1;
  let fixture: ComponentFixture<Pagina1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pagina1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pagina1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
