const fs = require("fs"); //modulejs

//Sincronica

// if (fs.existsSync("archivo.txt")) {
//   const contenidoArchivo1 = fs.readFileSync("archivo.txt", "utf-8");
//   console.log(contenidoArchivo1);
//   fs.appendFileSync("archivo.txt", "Esta es una linea nueva\n");
//   const contenidoArchivo2 = fs.readFileSync("archivo.txt", "utf-8");
//   console.log(contenidoArchivo2);
//   fs.unlinkSync("archivo.txt");
// } else {
//   fs.writeFileSync("archivo.txt", "Hola Coderhouse\n", "utf-8");
// }

//Callbacks

// if (fs.existsSync("archivo.txt")) {
//   fs.readFile("archivo.txt", "utf-8", (err, resultado) => {
//     if (err) {
//       console.log(err);
//       return;
//     }
//     console.log(resultado);
//   });
//   fs.appendFile("archivo.txt", "Esta es una linea nueva\n", (err) => {
//     if (err) {
//       console.log(err);
//       return;
//     }
//   });
//   fs.readFile("archivo.txt", "utf-8", (err, resultado) => {
//     if (err) {
//       console.log(err);
//       return;
//     }
//     console.log(resultado);
//   });
//   fs.unlink("archivo.txt", (err) => {
//     if (err) {
//       console.log(err);
//       return;
//     }
//   });
// } else {
//   fs.writeFile("archivo.txt", "Hola Coderhouse\n", "utf-8", (err) => {
//     if (err) {
//       console.log(err);
//       return;
//     }
//   });
// }

// fs.writeFileSync("fecha.txt", new Date().toString());
// //Recordar usar el toString
// let fecha = fs.readFileSync("fecha.txt", "utf-8");
// console.log(fecha);

//Promises

//Top level await - modulejs
// await fs.promises.writeFile("archivo.txt", "Hola Coderhouse\n", "utf-8");

// if (fs.existsSync("archivo.txt")) {
//   fs.promises
//     .readFile("archivo.txt", "utf-8")
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err));
//   fs.promises.appendFile("archivo.txt", "Esta es una linea nueva\n");
//   fs.promises
//     .readFile("archivo.txt", "utf-8")
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err));
//   fs.promises.unlink("archivo.txt");
// } else {
//   fs.promises.writeFile("archivo.txt", "Hola Coderhouse\n", "utf-8");
// }

const usuarios = [
  {
    nombre: "Nombre1",
    apellido: "Apellido1",
    edad: 1,
  },
  {
    nombre: "Nombre2",
    apellido: "Apellido2",
    edad: 2,
  },
];

fs.writeFileSync("usuarios.json", JSON.stringify(usuarios));
fs.writeFileSync("usuarios.txt", JSON.stringify(usuarios));

const usuariosTxt = JSON.parse(fs.readFileSync("usuarios.txt", "utf-8"));
console.log(usuariosTxt);
const usuariosJson = JSON.parse(fs.readFileSync("usuarios.json", "utf-8"));
console.log(usuariosJson);
