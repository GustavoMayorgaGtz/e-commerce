import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio.component';


const routes: Routes = [{
  
  path:'',
  component:InicioComponent
  
}];

@NgModule({
imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class InicioRoutingModule { }
