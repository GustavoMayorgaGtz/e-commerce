import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriasComponent } from './categorias/categorias.component';
import { InformacionComponent } from './informacion/informacion.component';
import { ProductosComponent } from './productos/productos.component';
import { PublicacionesComponent } from './publicaciones/publicaciones.component';
import { OrdenComponent } from './orden/orden.component';
import { DesignComponent } from './design/design.component';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  declarations: [
    CategoriasComponent,
    InformacionComponent,
    OrdenComponent,
    ProductosComponent,
    PublicacionesComponent,
    DesignComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ],
  exports: [
    CategoriasComponent,
    InformacionComponent,
    OrdenComponent,
    ProductosComponent,
    PublicacionesComponent,
    DesignComponent
  ] 
})
export class AdministradorPagesModule { }
