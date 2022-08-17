import { Component } from "@angular/core";

@Component({
    selector: 'app-counter',
    templateUrl: './counter.component.html'
})

export class CounterComponent{
    public title : string = 'Componente Contador'
    public contador : number = 0
    public numeros : number[] = []

    modificar = (cantidad : number) => {
        this.contador += cantidad
        this.numeros.push(this.contador)

    }
}