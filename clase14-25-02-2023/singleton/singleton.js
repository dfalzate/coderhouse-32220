import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

class MongoSingleton {
  static #instance
  constructor() {
    mongoose.set("strictQuery", false);
    mongoose.connect(process.env.MONGO_URI, (err) => {
      if (err) {
        console.log("❌ Error:" + err);
      } else {
        console.log('Connected')
      }
    });
  }

  static getInstance() {
    if (this.#instance) {
      console.log('La instancia ya existe')
      return this.#instance
    }
    this.#instance = new MongoSingleton()
    console.log('Connected to mongoDB')
    return this.#instance
  }

}

const conn1 = MongoSingleton.getInstance()
const conn2 = MongoSingleton.getInstance()
console.log(conn1===conn2)