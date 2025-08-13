import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataBindings } from './data-bindings';

describe('DataBindings', () => {
  let component: DataBindings;
  let fixture: ComponentFixture<DataBindings>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataBindings]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataBindings);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
