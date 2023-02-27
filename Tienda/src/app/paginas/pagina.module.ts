import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio/inicio.component';
import { PaginasRoutingModule } from './paginas-routing.module';
import { AdministradorComponent } from './administrador/administrador.component';
import { AdministradorPagesModule } from './administrador/administrador-pages/module.module';
import { ComponentsModule } from '../components/components.module';



@NgModule({
  declarations: [
    InicioComponent,
    AdministradorComponent
  ],
  imports: [
    CommonModule,
    PaginasRoutingModule,
    AdministradorPagesModule
    
  ]
})
export class PaginaModule { }
