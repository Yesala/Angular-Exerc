import { Persona2, procesaDatos } from './app';

const otrasPersonas : Persona2[] = [
    {
        nombre: 'Jose',
        apellido: 'Perez',
        edad: 34,
    },
    {
        nombre: 'Juan',
        apellido: 'Perez',
        edad: 34,
    }
]

const [nombres, edades] = procesaDatos(otrasPersonas)

console.log(nombres, edades)