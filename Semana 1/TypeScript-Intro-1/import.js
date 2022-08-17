"use strict";
exports.__esModule = true;
var app_1 = require("./app");
var otrasPersonas = [
    {
        nombre: 'Jose',
        apellido: 'Perez',
        edad: 34
    },
    {
        nombre: 'Juan',
        apellido: 'Perez',
        edad: 34
    }
];
var _a = (0, app_1.procesaDatos)(otrasPersonas), nombres = _a[0], edades = _a[1];
console.log(nombres, edades);
