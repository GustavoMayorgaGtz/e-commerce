import { Component } from '@angular/core';

@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.component.html',
  styleUrls: ['./administrador.component.scss']
})
export class AdministradorComponent {

  public opcion:number = 0;
  constructor(){
  }

  changeMenu(opcion: number){
   this.opcion = opcion;
  }
}
