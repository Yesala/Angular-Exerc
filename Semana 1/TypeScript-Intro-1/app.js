"use strict";
// let saludo = "Hola"
// console.log(saludo)
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.procesaDatos = void 0;
// let saludo2 = "Hola a todos"
// console.log(saludo2)
var saludo = "Hola";
console.log(saludo);
//Tipos
var numero = 22;
var booleanos = true;
var cualquiqera = true;
cualquiqera = 22;
cualquiqera = "Saludos";
var numeroCadena = 95;
numeroCadena = "Hola";
//Arrays, objetos e interfaces
var palabras = ['foo', 'bar'];
var arregloDeCuaquierCosa = [saludo, 23, true];
var tiposVarios = [saludo, 23, true];
var mario = {
    nombre: "Mario",
    vida: 100,
    habilidades: ['saltar', 'Meterse en tuberias', 'Montar dinosaurio']
};
mario.ciudad = "Genova";
console.log(mario);
console.table(mario);
//Funciones
function sumar(a, b) {
    return a + b;
}
var sumarArrow = function (a, b) { return a + b; };
var sumarArrow2 = function (a, b, c) {
    if (c === void 0) { c = 5; }
    return a + b + c;
};
console.log(sumar(1, 2));
console.log(sumarArrow2(1, 4));
var luigi = {
    nombre: 'Luigi',
    vida: 90,
    saltar: function () {
        console.log("Saltando");
    },
    habilidades: ["Comer honguitos"]
};
function curar(personaje, comerHonguito) {
    personaje.vida += comerHonguito;
}
curar(luigi, 10);
luigi.saltar();
console.log(luigi);
var laMejorCancionDeTodosLosTiempos = {
    nombre: 'Starway to heaven',
    duracion: 8.02,
    annio: "1971",
    autor: {
        nombre: 'Robert Plant',
        edad: 22
    }
};
var unAliasParaElNombre = laMejorCancionDeTodosLosTiempos.nombre, duracion = laMejorCancionDeTodosLosTiempos.duracion, annio = laMejorCancionDeTodosLosTiempos.annio, escritor = laMejorCancionDeTodosLosTiempos.autor.nombre;
console.log('El nombre de la canción es:', unAliasParaElNombre);
console.log('La duración de la canción es:', duracion);
console.log('La publicación de la canción fue:', annio);
console.log('El autor de la canción es:', escritor);
//Destructuracion de arreglos
var canciones = ['Stairway to heaven', 'Kashmir', 'Whole Lotta Love', 'Inmigrant song'];
//const [stairway, allOfMyLove, Kashmir, pepito, ana ] = canciones
var Kashmir = canciones[2], pepito = canciones[3];
console.log(pepito);
var nabucodonosor = {
    apellido: "Perez",
    nombre: "Nabucodonosor",
    edad: 50
};
var ana = {
    apellido: "Perez",
    nombre: "Ana",
    edad: 40
};
function procesaDatos(personas) {
    var nombres = '';
    var sumaEdad = 0;
    personas.forEach(function (_a) {
        var nombre = _a.nombre, edad = _a.edad;
        nombres += "".concat(nombre);
        sumaEdad += edad;
    });
    return [nombres, sumaEdad];
}
exports.procesaDatos = procesaDatos;
var personas = [nabucodonosor, ana];
var _a = procesaDatos(personas), nombres = _a[0], ages = _a[1];
console.log("Los hermanos ".concat(nombres, " y la suma de sus edades es ").concat(ages));
//Imports
//Clases
var Persona3 = /** @class */ (function () {
    function Persona3(nombre, direccion) {
        this.nombre = nombre;
        this.direccion = direccion;
    }
    return Persona3;
}());
var SuperHeroeMarvel = /** @class */ (function (_super) {
    __extends(SuperHeroeMarvel, _super);
    // public alterEgo : string
    // public edad : number
    // public nombreReal : string
    // public constructor (alterEgo: string, edad: number, nombreReal: string){
    //     super(nombreReal, 'NY')
    //     this.alterEgo = alterEgo
    //     this.edad = edad
    //     this.nombreReal = nombreReal
    // }
    function SuperHeroeMarvel(alterEgo, edad, nombreReal) {
        var _this = _super.call(this, nombreReal, 'NY') || this;
        _this.alterEgo = alterEgo;
        _this.edad = edad;
        _this.nombreReal = nombreReal;
        return _this;
    }
    return SuperHeroeMarvel;
}(Persona3));
var ironMan = new SuperHeroeMarvel('Ironman', 35, 'Tony');
//Generics
function mostrarTipo(argumento) {
    return argumento;
}
var soyString = mostrarTipo("Hola");
var soyNumero = mostrarTipo(2);
var soyString2 = mostrarTipo("Hola");
//Decoradores
function classDecorator(constructor) {
    return /** @class */ (function (_super) {
        __extends(class_1, _super);
        function class_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.newProperty = 'Nueva propiedad';
            _this.hello = 'Hi';
            return _this;
        }
        return class_1;
    }(constructor));
}
var MiSuperClase = /** @class */ (function () {
    function MiSuperClase() {
        this.miPropiedad = 'sadawdawd';
    }
    MiSuperClase.prototype.imprimir = function () {
        console.log('Hola');
    };
    MiSuperClase = __decorate([
        classDecorator
    ], MiSuperClase);
    return MiSuperClase;
}());
console.log(MiSuperClase);
var miClase = new MiSuperClase();
console.log(miClase.miPropiedad);
var pasajero1 = {
    nombre: 'Jose'
};
var pasajero2 = {
    nombre: 'Maria',
    hijos: ['Juan', 'Jesus']
};
function imprimeHijos(pasajero) {
    var _a;
    var cantidad = ((_a = pasajero.hijos) === null || _a === void 0 ? void 0 : _a.length) || 0;
    console.log(cantidad);
}
imprimeHijos(pasajero1);
imprimeHijos(pasajero2);
