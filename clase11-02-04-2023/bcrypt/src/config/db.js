import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGO_URI, (err) => {
  if (err) {
    console.log("❌ Error:" + err);
  } else {
    console.log("🔥 Connected to MongoDB");
  }
});

export default mongoose;
