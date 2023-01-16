import { Component } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent {
  titulo:string = "Data binding Interpolation"

  booleano:boolean = true;
  thwoway:string= 'El two-way data binding en Angular nos permite modificar el valor de una propiedad de forma bidireccional de forma que cuando nosotros modificamos el valor de una propiedad en la vista el valor tambien se atualiza en el modelo de datos.'

  enviar(){
    this.booleano = !this.booleano
  }
}
