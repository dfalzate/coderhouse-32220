import { Schema, model } from "mongoose";

const schema = new Schema(
  {
    first_name: {
      type: String,
      required: true,
    },
    last_name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    age: {
      type: Number,
      min: 0,
      required: true,
    },
    platforms: [{
      platform: String,
      email:String
    }]
  },
  {
    timestamps: true,
  },
);

export const UserModel = model("Users", schema);
