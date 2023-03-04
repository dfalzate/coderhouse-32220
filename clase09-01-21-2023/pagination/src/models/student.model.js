import { Schema, model } from "mongoose";
import pagination from "mongoose-paginate-v2";

const schema = new Schema(
  {
    nombres: {
      type: String,
      required: true,
    },
    apellidos: {
      type: String,
      required: true,
    },
    dni: {
      type: Number,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

schema.plugin(pagination);

export const StudentModel = model("Students", schema);
