import dotenv from "dotenv";
import program from "../utils/commander.js";

dotenv.config({
  path: program.opts().mode === "development" ? "./.env.development" : "./.env.production",
});

export default {
  port: process.env.PORT || 3000,
  mongo_uri: process.env.MONGO_URI || null,
};
