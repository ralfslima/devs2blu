import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimeiroComponente } from './primeiro-componente';

describe('PrimeiroComponente', () => {
  let component: PrimeiroComponente;
  let fixture: ComponentFixture<PrimeiroComponente>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrimeiroComponente]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrimeiroComponente);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
