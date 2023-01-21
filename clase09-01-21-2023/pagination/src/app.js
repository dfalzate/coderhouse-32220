import express from "express";
import "./config/db.js";
import { CourseModel } from "./models/course.model.js";
import { StudentModel } from "./models/student.model.js";
import { engine } from "express-handlebars";
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "views");

const students = [
  { nombres: "Juan", apellidos: "Perez", dni: "12345678", email: "juanperez@example.com" },
  { nombres: "Maria", apellidos: "Garcia", dni: "87654321", email: "mariagarcia@example.com" },
  {
    nombres: "Pedro",
    apellidos: "Martinez",
    dni: "11111111",
    email: "pedromartinez@example.com",
  },
  { nombres: "Ana", apellidos: "Rodriguez", dni: "22222222", email: "anarodriguez@example.com" },
  { nombres: "Luis", apellidos: "Sanchez", dni: "33333333", email: "luissanchez@example.com" },
  {
    nombres: "Isabel",
    apellidos: "Gonzalez",
    dni: "44444444",
    email: "isabelgonzalez@example.com",
  },
  { nombres: "Carlos", apellidos: "Gomez", dni: "55555555", email: "carlosgomez@example.com" },
  { nombres: "Sofia", apellidos: "Perez", dni: "66666666", email: "sofiaperez@example.com" },
  { nombres: "Ramon", apellidos: "Garcia", dni: "77777777", email: "ramongarcia@example.com" },
];

app.get("/createStudents", async (req, res) => {
  await StudentModel.create(students);
  res.send("Estudiantes creados correctamente");
});

const courses = [
  {
    nombre: "Curso1",
  },
  {
    nombre: "Curso2",
  },
  {
    nombre: "Curso3",
  },
  {
    nombre: "Curso4",
  },
];

app.get("/createCourses", async (req, res) => {
  await CourseModel.create(courses);
  res.send("Cursos creados correctamente");
});

app.post("/addStudentToCourse", async (req, res) => {
  const { course, student } = req.body;
  const _course = await CourseModel.findById(course);
  _course.estudiantes.push(student);
  _course.save();
  res.send("Estudiante agregado");
});

app.get("/course/:courseId", async (req, res) => {
  const response = await CourseModel.findById(req.params.courseId).populate("estudiantes");
  res.json(response);
});

app.get("/course/pre/:courseId", async (req, res) => {
  const response = await CourseModel.find({ _id: req.params.courseId });
  res.json(response);
});

app.get("/", async (req, res) => {
  const { page } = req.query;
  const students = await StudentModel.paginate({}, { limit: 3, page });
  res.json(students);
});

app.get("/pagination", async (req, res) => {
  const { page } = req.query;
  const estudiantes = await StudentModel.paginate({}, { limit: 3, page, lean: true });
  console.log(estudiantes);
  res.render("pagination", { ...estudiantes });
});

const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () =>
  console.log(`🚀 Server started on port http://localhost:${PORT}`),
);
server.on("error", (err) => console.log(err));
