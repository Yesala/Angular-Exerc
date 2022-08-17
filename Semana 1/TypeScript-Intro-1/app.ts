// let saludo = "Hola"
// console.log(saludo)

// let saludo2 = "Hola a todos"
// console.log(saludo2)

let saludo: string = "Hola"
console.log(saludo)

//Tipos
let numero: number = 22
let booleanos: boolean = true
let cualquiqera: any = true
cualquiqera = 22
cualquiqera = "Saludos"
let numeroCadena: number | string = 95
numeroCadena = "Hola"

//Arrays, objetos e interfaces
let palabras: string[] = ['foo', 'bar']
let arregloDeCuaquierCosa: any[] = [saludo, 23, true]
let tiposVarios: (boolean | string | number)[] = [saludo, 23, true]

//Interfaces
interface PersonajeVideoJuego {
    nombre: string;
    vida: number;
    habilidades: string[];
    ciudad?: string;
}

const mario: PersonajeVideoJuego = {
    nombre: "Mario",
    vida: 100,
    habilidades: ['saltar', 'Meterse en tuberias', 'Montar dinosaurio'],
}

mario.ciudad = "Genova"

console.log(mario)
console.table(mario)

//Funciones
function sumar(a: number, b: number): number {
    return a + b
}

const sumarArrow = (a: number, b: number): number => a + b

const sumarArrow2 = (a: number, b?: number, c: number = 5): number => a + b + c

console.log(sumar(1, 2))
console.log(sumarArrow2(1, 4))

// Interfaces con metodo

interface PersonajeVideoJuegocConMetodo {
    nombre: string;
    vida: number;
    habilidades: string[];
    ciudad?: string;
    saltar: () => void;
}

const luigi: PersonajeVideoJuegocConMetodo = {
    nombre: 'Luigi',
    vida: 90,
    saltar() {
        console.log("Saltando")
    },
    habilidades: ["Comer honguitos"]
}

function curar(personaje: PersonajeVideoJuegocConMetodo, comerHonguito: number) {
    personaje.vida += comerHonguito
}

curar(luigi, 10)
luigi.saltar()
console.log(luigi)

//Destructuracion
interface Cancion {
    nombre: string
    duracion: number
    annio: string
    autor: Persona
}

interface Persona {
    nombre: string
    edad: number
}

const laMejorCancionDeTodosLosTiempos: Cancion = {
    nombre: 'Starway to heaven',
    duracion: 8.02,
    annio: "1971",
    autor: {
        nombre: 'Robert Plant',
        edad: 22
    }
}

const { nombre: unAliasParaElNombre, duracion, annio, autor: { nombre: escritor } } = laMejorCancionDeTodosLosTiempos

console.log('El nombre de la canción es:', unAliasParaElNombre)
console.log('La duración de la canción es:', duracion)
console.log('La publicación de la canción fue:', annio)
console.log('El autor de la canción es:', escritor)

//Destructuracion de arreglos
const canciones: string[] = ['Stairway to heaven', 'Kashmir', 'Whole Lotta Love', 'Inmigrant song']

//const [stairway, allOfMyLove, Kashmir, pepito, ana ] = canciones
const [, , Kashmir, pepito] = canciones

console.log(pepito)

//Destructuacion en funciones
export interface Persona2 extends Persona {
    apellido: string
}

const nabucodonosor: Persona2 = {
    apellido: "Perez",
    nombre: "Nabucodonosor",
    edad: 50
}

const ana: Persona2 = {
    apellido: "Perez",
    nombre: "Ana",
    edad: 40
}

export function procesaDatos(personas: Persona[]) {
    let nombres: string = ''
    let sumaEdad: number = 0
    personas.forEach(({ nombre, edad }) => { nombres += `${nombre}`; sumaEdad += edad })
    return [nombres, sumaEdad]
}

const personas = [nabucodonosor, ana]

const [nombres, ages] = procesaDatos(personas)
console.log(`Los hermanos ${nombres} y la suma de sus edades es ${ages}`)

//Imports

//Clases
class Persona3 {
    constructor(public nombre: string, public direccion: string) {

    }
}

class SuperHeroeMarvel extends Persona3 {
    // public alterEgo : string
    // public edad : number
    // public nombreReal : string

    // public constructor (alterEgo: string, edad: number, nombreReal: string){
    //     super(nombreReal, 'NY')
    //     this.alterEgo = alterEgo
    //     this.edad = edad
    //     this.nombreReal = nombreReal
    // }
    constructor(public alterEgo: string,
                public edad: number,
                public nombreReal: string){
                    super(nombreReal, 'NY')
                }
}

const ironMan = new SuperHeroeMarvel('Ironman', 35, 'Tony')

//Generics
function mostrarTipo<T> (argumento: T){
    return argumento
}

let soyString = mostrarTipo("Hola")
let soyNumero = mostrarTipo(2)
let soyString2 = mostrarTipo<string>("Hola")

//Decoradores
function classDecorator<T extends {new (...args: any[]) : {}}>(
    constructor : T
){
    return class extends constructor {
        newProperty = 'Nueva propiedad';
        hello = 'Hi';
    }
}

@classDecorator
class MiSuperClase {
    public miPropiedad : string = 'sadawdawd'

    imprimir(){
        console.log('Hola')
    } 
}

console.log(MiSuperClase)

const miClase = new MiSuperClase()
console.log(miClase.miPropiedad)

//Chaining
interface Pasajero {
    nombre: string
    hijos?: string[]
}

const pasajero1 : Pasajero = {
    nombre: 'Jose'
}

const pasajero2 : Pasajero = {
    nombre : 'Maria',
    hijos : ['Juan', 'Jesus']
}

function imprimeHijos(pasajero : Pasajero) : void{
    const cantidad = pasajero.hijos?.length || 0
    console.log(cantidad)
}

imprimeHijos(pasajero1)
imprimeHijos(pasajero2)