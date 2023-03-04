import { Schema, model } from "mongoose";

const schema = new Schema(
  {
    first_name: {
      type: String,
      index: true,
    },
    last_name: {
      type: String,
    },
    email: {
      type: String,
    },
    gender: {
      type: String,
    },
  },
  {
    timestamps: true,
  },
);

export const UserModel = model("Users", schema);
