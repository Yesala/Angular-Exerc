// Variables

let edad:number=20;
let mensaje:string='Hola!';
let condición:boolean=true;
console.log(edad);
console.log(mensaje);
console.log(condición);

// Operadores

let num1:number=10;
let num2:number=3;

let resultado:number;

resultado = num1 + num2;

console.log("El resultado de la suma es: " + resultado);

resultado = num1 * num2;

console.log("El resultado del producto es: " + resultado);

resultado = num1 / num2;

console.log("El resultado de la división es: " + resultado);

resultado = num1 % num2;

console.log("El resultado del resto es: " + resultado);

// Sentencia de selección: IF ELSE

let nota:number;

nota=97.5;

if (nota >= 90)
{
    console.log("El estudiante se ha inscrito en la lista de honores con una nota de: " + nota);

    if (nota >= 95)
    {
        console.log("El estudiante tiene una nota muy alta de: " + nota);
    }

} else if (nota >= 70)
{
    console.log("El estudiante se ha inscrito en la lista de admitidos con una nota de: " + nota);
} else {
    console.log("El estudiante se ha inscrito en la lista de no admitidos con una nota de: " + nota);
}

// Sentencia de selección: SWITCH CASE

nota=7;

switch (nota)
{
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

let arreglo:any[] = ["","",""];
arreglo = [true, 1, "ok", ["1","2"]];
document.write(arreglo.toString());

let arreglotuple: [string, number];
arreglotuple = ["Nota", 7];
document.write(arreglotuple.toString());

let variable1:number= 10; //Mantiene el alcance
const constante1:number= 100; //Mantiene el valor
let vacío:void=undefined; 
let nulo:null= null;
let indefinido:undefined=undefined;

document.write(typeof(arreglotuple) + " ");
document.write(typeof(variable1) + " ");
document.write(typeof(constante1) + " ");
document.write(typeof(vacío) + " ");
document.write(typeof(nulo) + " ");
document.write(typeof(indefinido) + " ");

// Funciones

function obtenerSuma(num1:number, num2:number):number {
    return num1 + num2; 
}

document.write(obtenerSuma(1, 3).toString());

let miSuma = function (
    num1:number | string,
    num2:number | string):number {
        if(typeof(num1) === 'string')
        {
            num1 = parseInt(num1);
        }
        if(typeof(num2) === 'string')
        {
            num2 = parseInt(num2);
        }
    return num1 + num2;
}

document.write(miSuma(1, 3).toString());
document.write(miSuma("10", "30").toString());


function obtenerNombre(nombre:string, apellido1:string, apellido2?:string) {
    if (apellido2 == undefined)
    {
        return `${nombre} ${apellido1}`
    }
    return `${nombre} ${apellido1} ${apellido2}`
}
document.write(obtenerNombre(" A", "B", "C"));
document.write(obtenerNombre(" A", "B"));


function miFunción():void {
    return;    
}

// Interfaces

interface Itarea{
    título:string;
    texto:string;
}

function mostrarTarea(tarea:Itarea) {
    console.log(`${tarea.título} - ${tarea.texto}`);
}

let miTarea: Itarea = {título: 'Hacer cena', texto: 'Pollo'};

mostrarTarea({
título: 'Hacer cena',
texto: 'Pollo'
});

mostrarTarea(miTarea);

// Clases

class usuario {
    protected nombre:string;
    public correo:string;
    private edad:number;

    constructor(nombre:string, correo:string, edad:number) {
        this.nombre = nombre;
        this.correo = correo;
        this.edad = edad;
    }

    registrar(){
        console.log(`${this.nombre} esta registrado!`)        
    }

    public devuelveEdad()
    {
        return this.edad;
    }

}

var pedro = new usuario('Pedro', 'pedro@correo.com', 20);

//document.write(pedro.nombre);
pedro.registrar();
console.log(pedro.devuelveEdad());

// Herencia de clases

class miembro extends usuario{
    id:number;

    constructor(id:number, nombre:string, correo:string, edad:number){
        super(nombre, correo, edad);
        this.id = id;
    }

    registrar(){
        console.log(`${this.nombre} esta registrado como miembro!`)        
    }
}

var josé = new miembro(1, 'José', 'jose@correo.com', 30);
josé.registrar();
 