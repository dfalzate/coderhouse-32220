import express from "express";
// const __dirname = new URL(".", import.meta.url).pathname;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// console.log(__dirname);
// app.use("/static", express.static(__dirname, "public"));
app.use("/static", express.static("static/public"));

const PORT = 3000;
const server = app.listen(PORT, () =>
  console.log(`🚀 Server started on port http://localhost:${PORT}`),
);
server.on("error", (err) => console.log(err));
