import dotenv from "dotenv";
dotenv.config();

export default {
  mongo_uri: process.env.MONGO_URI || null,
  port: process.env.PORT || 3000,
};
