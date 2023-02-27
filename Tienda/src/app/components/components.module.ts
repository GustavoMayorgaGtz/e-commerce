import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VerificarEntradaComponent } from './verificar-entrada/verificar-entrada.component';



@NgModule({
  declarations: [
    VerificarEntradaComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    VerificarEntradaComponent
  ]
})
export class ComponentsModule { }
