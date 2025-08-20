import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImplementarPipes } from './implementar-pipes';

describe('ImplementarPipes', () => {
  let component: ImplementarPipes;
  let fixture: ComponentFixture<ImplementarPipes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImplementarPipes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImplementarPipes);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
