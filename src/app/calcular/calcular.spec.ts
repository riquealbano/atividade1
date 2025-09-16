import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Calcular } from './calcular';

describe('Calcular', () => {
  let component: Calcular;
  let fixture: ComponentFixture<Calcular>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Calcular]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Calcular);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
