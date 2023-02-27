import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-verificar-entrada',
  templateUrl: './verificar-entrada.component.html',
  styleUrls: ['./verificar-entrada.component.scss']
})
export class VerificarEntradaComponent implements OnInit, OnChanges {
   @Input() status: number = 0;

   constructor(){

   }
  ngOnInit(): void {
    
  }

  ngOnChanges(changes: SimpleChanges):void{
    
  }


}
