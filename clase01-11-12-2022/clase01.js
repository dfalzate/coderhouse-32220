console.log("Hola Coderhouse");
console.warn("Hola Coderhouse");
console.error("Hola Coderhouse");
console.clear();

let nombre = "Coderhouse";
nombre[0] = "A";

console.log(typeof "coderhouse");
console.log(nombre);

String;
Number;
(Null) => null;

console.log(typeof null);
console.log(!!!0, !!null, !!undefined, !!false);
// !, !!, !!!

/* ----------------------------- Tipos de datos ----------------------------- */

//String
let nombre1 = "Corhouse";
//Number
const number = 1;
//Boolean
const bool = false;
//Null
const nulo = null;
//undefined
const indefinido = undefined;
//date
const fecha = new Date();
//regex
const re = /'A'/;
//error
// throw new Error();
//funciones
function fun1() {}
const fun2 = () => {};
// clases
class Clase {}
// Arrays
const arr = [1, 2, 3, 4];

const arr1 = JSON.parse(JSON.stringify(arr)); //deep cloning
const arr2 = arr;
arr[0] = 5;
arr2[1] = 6;
console.log(arr, arr1, arr2);

//Desafio en clase

const usuarios = [
  {
    nombre: "Nicolas",
    Edad: 21,
    Precio: 99,
    nombresDeSeries: ["Breaking Bad", "Juego de Tronos"],
  },
  {
    nombre: "Javier",
    Edad: 24,
    Precio: 120,
    nombresDeSeries: ["Breaking Bad", "Juego de Tronos"],
  },
];
usuarios.forEach((usuario) => {
  usuario.Edad++, usuario.nombresDeSeries.push("Peaky Blinders");
});
console.log(usuarios[0].nombresDeSeries);

const constante = 1;
// constante = 2;
const arreglo = [];
const objeto = {};
// arreglo = [1];
arreglo.push(1);
console.log(arreglo);
objeto.propiedad1 = "Hola";

function fun1() {}

const function1 = () => {};
//return implicito
const arrow1 = () => 1 + 2 + 3;
const arrow2 = (var1, var2) => console.log(var1, var2);
//callback, ES6
arr.filter(() => {});

//template string

const template = "Hola";

console.log(`${template} Coderhouse`);

/* --------------------------- Ejercicio en clase --------------------------- */

function mostrarLista(arreglo) {
  if (Array.isArray(arreglo)) {
    if (arreglo.length === 0) {
      console.log("Lista vacía");
      return;
    }
    for (const arr of arreglo) {
      console.log(arr);
    }
    console.log("Longitud:", arreglo.length);
  } else {
    console.log("No es un arreglo");
  }
}

mostrarLista([]);
mostrarLista(1);
mostrarLista("a");
mostrarLista(null);
mostrarLista([1, 2, 3, "a", {}, []]);

/* -------------------------------- Closures -------------------------------- */
// function foo() {
//   let x = 0;
//   function bas() {
//     console.log(x);
//     function func1() {

//     }
//   }
// }

/* --------------------------------- Clases --------------------------------- */

class Persona {
  constructor(nombre) {
    this.nombre = nombre;
  }

  static nombre = "Esto es estático";

  getNombre() {
    return "Esta no es estático", this.nombre;
  }
}

const instancia1 = new Persona("nombre1");
const instancia2 = new Persona("nombre2");

console.log(instancia1.getNombre());
console.log(instancia2.getNombre());
console.log(Persona.nombre);

/* ------------------------------ Hands on lab ------------------------------ */

class Contador {
  constructor(nombre) {
    this.nombre = nombre;
    this.contador = 0;
  }
  static contadorGlobal = 0;

  getResponsable = () => console.log(this.nombre);
  getCuentaGlobal = () => console.log(`Global ${this.nombre}`, Contador.contadorGlobal);
  getCuentaIndividual = () => console.log(`Individual ${this.nombre}`, this.contador);

  contar() {
    Contador.contadorGlobal++;
    this.contador++;
  }
}

const cont1 = new Contador("Contador 1");
const cont2 = new Contador("Contador 2");

cont1.getResponsable();
cont2.getResponsable();
cont1.contar();
cont1.getCuentaIndividual();
cont1.getCuentaGlobal();
cont2.getCuentaIndividual();
cont2.getCuentaGlobal();
cont2.contar();
cont1.getCuentaIndividual();
cont1.getCuentaGlobal();
cont2.getCuentaIndividual();
cont2.getCuentaGlobal();
