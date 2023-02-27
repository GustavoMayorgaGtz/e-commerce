import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerificarEntradaComponent } from './verificar-entrada.component';

describe('VerificarEntradaComponent', () => {
  let component: VerificarEntradaComponent;
  let fixture: ComponentFixture<VerificarEntradaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerificarEntradaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerificarEntradaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
