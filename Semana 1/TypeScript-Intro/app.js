// Variables
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var edad = 20;
var mensaje = 'Hola!';
var condición = true;
console.log(edad);
console.log(mensaje);
console.log(condición);
// Operadores
var num1 = 10;
var num2 = 3;
var resultado;
resultado = num1 + num2;
console.log("El resultado de la suma es: " + resultado);
resultado = num1 * num2;
console.log("El resultado del producto es: " + resultado);
resultado = num1 / num2;
console.log("El resultado de la división es: " + resultado);
resultado = num1 % num2;
console.log("El resultado del resto es: " + resultado);
// Sentencia de selección: IF ELSE
var nota;
nota = 97.5;
if (nota >= 90) {
    console.log("El estudiante se ha inscrito en la lista de honores con una nota de: " + nota);
    if (nota >= 95) {
        console.log("El estudiante tiene una nota muy alta de: " + nota);
    }
}
else if (nota >= 70) {
    console.log("El estudiante se ha inscrito en la lista de admitidos con una nota de: " + nota);
}
else {
    console.log("El estudiante se ha inscrito en la lista de no admitidos con una nota de: " + nota);
}
// Sentencia de selección: SWITCH CASE
nota = 7;
switch (nota) {
    case 5:
        console.log("El estudiante ha obtenido un aprobado");
        break;
    case 6:
        console.log("El estudiante ha obtenido una nota alta");
        break;
    case 7:
        console.log("El estudiante ha obtenido una nota muy alta");
        break;
    case 9:
        console.log("El estudiante ha obtenido una nota excelente");
        break;
    default:
        console.log("La nota no esta definida");
        break;
}
// Otros tipos de datos
var arreglo = ["", "", ""];
arreglo = [true, 1, "ok", ["1", "2"]];
document.write(arreglo.toString());
var arreglotuple;
arreglotuple = ["Nota", 7];
document.write(arreglotuple.toString());
var variable1 = 10; //Mantiene el alcance
var constante1 = 100; //Mantiene el valor
var vacío = undefined;
var nulo = null;
var indefinido = undefined;
document.write(typeof (arreglotuple) + " ");
document.write(typeof (variable1) + " ");
document.write(typeof (constante1) + " ");
document.write(typeof (vacío) + " ");
document.write(typeof (nulo) + " ");
document.write(typeof (indefinido) + " ");
// Funciones
function obtenerSuma(num1, num2) {
    return num1 + num2;
}
document.write(obtenerSuma(1, 3).toString());
var miSuma = function (num1, num2) {
    if (typeof (num1) === 'string') {
        num1 = parseInt(num1);
    }
    if (typeof (num2) === 'string') {
        num2 = parseInt(num2);
    }
    return num1 + num2;
};
document.write(miSuma(1, 3).toString());
document.write(miSuma("10", "30").toString());
function obtenerNombre(nombre, apellido1, apellido2) {
    if (apellido2 == undefined) {
        return nombre + " " + apellido1;
    }
    return nombre + " " + apellido1 + " " + apellido2;
}
document.write(obtenerNombre(" A", "B", "C"));
document.write(obtenerNombre(" A", "B"));
function miFunción() {
    return;
}
function mostrarTarea(tarea) {
    console.log(tarea.título + " - " + tarea.texto);
}
var miTarea = { título: 'Hacer cena', texto: 'Pollo' };
mostrarTarea({
    título: 'Hacer cena',
    texto: 'Pollo'
});
mostrarTarea(miTarea);
// Clases
var usuario = /** @class */ (function () {
    function usuario(nombre, correo, edad) {
        this.nombre = nombre;
        this.correo = correo;
        this.edad = edad;
    }
    usuario.prototype.registrar = function () {
        console.log(this.nombre + " esta registrado!");
    };
    usuario.prototype.devuelveEdad = function () {
        return this.edad;
    };
    return usuario;
}());
var pedro = new usuario('Pedro', 'pedro@correo.com', 20);
//document.write(pedro.nombre);
pedro.registrar();
console.log(pedro.devuelveEdad());
// Herencia de clases
var miembro = /** @class */ (function (_super) {
    __extends(miembro, _super);
    function miembro(id, nombre, correo, edad) {
        var _this = _super.call(this, nombre, correo, edad) || this;
        _this.id = id;
        return _this;
    }
    miembro.prototype.registrar = function () {
        console.log(this.nombre + " esta registrado como miembro!");
    };
    return miembro;
}(usuario));
var josé = new miembro(1, 'José', 'jose@correo.com', 30);
josé.registrar();
