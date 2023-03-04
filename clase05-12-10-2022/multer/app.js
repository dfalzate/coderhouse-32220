import express from "express";
import multer from "multer";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("multer/public"));

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "multer/uploads");
  },
  filename: function (req, file, cb) {
    // const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    // cb(null, file.fieldname + "-" + uniqueSuffix);
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

// const upload = multer({ dest: "multer/uploads" });

app.post("/profile", upload.single("file"), function (req, res, next) {
  console.log(req.file, req.body);
  // req.file is the `avatar` file
  // req.body will hold the text fields, if there were any
  res.send("File uploaded");
});

const PORT = 3000;
const server = app.listen(PORT, () =>
  console.log(`🚀 Server started on port http://localhost:${PORT}`),
);
server.on("error", (err) => console.log(err));
