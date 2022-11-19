// ECMASCRIPT 7

const exponente = 2 ** 3;
console.log("Exponente:", exponente);

const array = [1, 2, 3, 4, 5, 6];
console.log("Existe dentro del arreglo", array.includes(5));
console.log("No esta en el arreglo", array.includes(8));

//ECMASCRIPT 8

const object = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
};

console.log("Object.entries", Object.entries(object));
console.log("Object.value", Object.values(object));
console.log("Object.keys", Object.keys(object));

// ECMASCRIPT 9

//spread operator

const arreglo2 = [1, 2, 3, -1, 6, 9];

const minimo = Math.min(...arreglo2);
console.log(minimo, ...arreglo2);

const obj1 = {
  a: 1,
  b: 2,
  d: { e: 1 },
};
const obj2 = {
  ...obj1,
  a: 4,
  c: 3,
};

// Object.assign(obj2,obj1)

console.log("Obj2", obj2);

//rest operator

const myFun1 = (a, b, ...otrosParametros) => {
  console.log(a);
  console.log(b);
  console.log(otrosParametros);
};

myFun1(1, 2, 3, 4, 5, 6, 76, 8, "a", [1], { a: "b" });

//Utilizacion ES6-ES9

const objetos = [
  {
    manzanas: 3,
    peras: 0,
    carne: 9,
    jugos: 7,
    dulces: 12,
  },
  {
    manzanas: 9,
    sandias: 54,
    huevos: 2,
    jugos: 40,
    panes: 7,
  },
];

const llavesNoRepetidas = [];

let sumaValores = 0;

objetos.forEach((objeto) => {
  const llaves = Object.keys(objeto);
  const valores = Object.values(objeto);
  llaves.forEach((llave) => {
    if (!llavesNoRepetidas.includes(llave)) {
      llavesNoRepetidas.push(llave);
    }
  });
  valores.forEach((valor) => (sumaValores += valor));
});

console.log(llavesNoRepetidas);
console.log(sumaValores);

// ECMASCRIPT 10 y 11

// trim

const hola = "    hola coderhouse   ";
console.log(hola, "-", hola.trim(), "-");

//flat

const arreglo3 = [1, 2, [3, 4], [5, 6], [7, [8, [9]]]];
console.log(arreglo3, arreglo3.flat(3));

// ECMASCRIPT 11

let altura = 0;

// falsy values 0,null,undefined, false
//!!0,!!null,!!undefined, false

console.log("Altura", altura || 100);
console.log("Altura", altura ?? 100);

// Hands on lab

console.clear();

class TicketManager {
  #precioBaseDeGanancia;
  constructor() {
    this.eventos = [];
  }

  agregarEvento(nombre, lugar, precio, capacidad = 50, fecha = new Date()) {
    const evento = {
      id: this.#getMaxId() + 1,
      nombre,
      lugar,
      capacidad,
      precio,
      fecha,
      participantes: [],
    };
    this.eventos.push(evento);
    console.log(this.eventos);
  }

  agregarUsuario(idEvento, idUsuario) {
    const evento = this.#getEvento(idEvento);
    if (evento) {
      if (!evento.participantes.includes(idUsuario)) evento.participantes.push(idUsuario);
      console.log(this.eventos);
    } else {
      console.log("Evento no existe");
    }
  }

  ponerEventoEnGira(idEvento, nuevaLocalidad, nuevaFecha) {
    const evento = this.#getEvento(idEvento);
    if (evento) {
      const nuevoEvento = {
        ...evento,
        id: this.#getMaxId() + 1,
        lugar: nuevaLocalidad,
        fecha: nuevaFecha,
        participantes: [],
      };
      this.eventos.push(nuevoEvento);
      console.log(this.eventos);
    } else {
      console.log("Evento no existe");
    }
  }

  #getMaxId() {
    let maxId = 0;
    this.eventos.map((evento) => {
      if (evento.id > maxId) maxId = evento.id;
    });
    return maxId;
  }

  #getEvento(idEvento) {
    return this.eventos.find((evento) => evento.id === idEvento);
  }
}

const ticketManager = new TicketManager();

ticketManager.agregarEvento("Evento1", "lugar1", 1);
ticketManager.agregarEvento("Evento2", "lugar2", 2);
ticketManager.agregarUsuario(1, "Coderhouse");
ticketManager.agregarUsuario(1, "Coderhouse");
ticketManager.agregarUsuario(1, "Backend");
ticketManager.agregarUsuario(3, "Backend");
ticketManager.ponerEventoEnGira(1, "lugar3", new Date("12/12/2022"));
ticketManager.ponerEventoEnGira(4, "lugar3", new Date("12/12/2022"));
