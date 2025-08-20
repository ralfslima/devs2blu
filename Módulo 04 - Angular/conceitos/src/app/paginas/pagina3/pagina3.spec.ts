import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pagina3 } from './pagina3';

describe('Pagina3', () => {
  let component: Pagina3;
  let fixture: ComponentFixture<Pagina3>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pagina3]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pagina3);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
