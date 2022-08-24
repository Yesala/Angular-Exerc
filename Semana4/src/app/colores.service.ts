import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ColoresService {

  colores = ['green', 'red', 'blue', 'yellow', 'black', 'white', 'brown', 'orange']

  constructor() { 
    fetch('https://pokeapi.co/api/v2/pokemon')
      .then(res => res.json())
      .then(data => this.pokemons = data.results)

      console.log(this.pokemons)
  }

  pokemons : Pokemon[] = []
}

interface Pokemon{
  name : string,
  url : string
}