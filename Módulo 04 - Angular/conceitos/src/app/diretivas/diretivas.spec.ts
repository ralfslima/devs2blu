import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Diretivas } from './diretivas';

describe('Diretivas', () => {
  let component: Diretivas;
  let fixture: ComponentFixture<Diretivas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Diretivas]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Diretivas);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
