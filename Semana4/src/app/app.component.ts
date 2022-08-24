import { Component } from '@angular/core';
import { ColoresService } from './colores.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Semana4';
  activo : boolean = true
  a: number = 10
  b: number = 5
  valor: string = 'si'

  unaFuncion = () : boolean => false

  colores : string [] = ['green', 'red', 'blue', 'yellow']

  usuarios : string[] = ['Maria', 'Jose', 'Juan', 'Pedro']

  colorSeleccionado : string = ''

  onColorSelectedHandler = (e : any) => this.colorSeleccionado = e.target.value

  constructor(public coloresService : ColoresService){
  setTimeout(() => {
    coloresService.colores.push('blanco')
  }, 5000);//No se deben exponer las propiedades
  }

}
