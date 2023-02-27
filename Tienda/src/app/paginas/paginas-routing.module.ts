import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [{
  
    path:'',
    children:[
      {
        path:'',
        loadChildren: () => import('./inicio/inicio.module').then(m => m.InicioModule)
      },
      {
        path:'administrador',
        loadChildren: () => import('./administrador/administrador.module').then(m => m.AdministradorModule)
      },
      {
        path:'*',
        redirectTo:'inicio'
      }
    ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaginasRoutingModule { }
