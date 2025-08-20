import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pagina2 } from './pagina2';

describe('Pagina2', () => {
  let component: Pagina2;
  let fixture: ComponentFixture<Pagina2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pagina2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pagina2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
