import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdministradorPagesModule } from './paginas/administrador/administrador-pages/module.module';


@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdministradorPagesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
