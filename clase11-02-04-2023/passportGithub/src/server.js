import express from "express";
import dotenv from "dotenv";
dotenv.config();
if (process.env.MONGO_URI) import("./config/db.js");
import cookie from "cookie-parser";
import session from "express-session";
import mongoStore from "connect-mongo";
import passport from 'passport';
import UserRouter from "./routers/user.route.js";
import AuthRouter from "./routers/auth.router.js";
import PassportLocalRouter from './routers/passportLocal.router.js'
import GithubRouter from './routers/github.router.js'

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookie());
app.use(
  session({
    store: new mongoStore({
      mongoUrl: process.env.MONGO_URI,
      options: {
        userNewUrlParser: true,
        useUnifiedTopology: true,
      },
    }),
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 100000 },
  }),
);

app.use(passport.initialize())
app.use(passport.session())

app.use("/api/users", UserRouter);
app.use("/api/auth", AuthRouter);
app.use("/api/passportLocal", PassportLocalRouter)
app.use("/api/github", GithubRouter)

const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () =>
  console.log(`🔥 Server started on port http://localhost:${PORT}`),
);
server.on("error", (err) => console.log(err));
