import { Schema, model } from "mongoose";

const schema = new Schema(
  {
    referencia: {
      type: String,
      required: true,
      unique: true,
    },
    descripcion: {
      type: String,
      required: true,
    },
    precio: {
      type: Number,
      required: true,
      min: 0,
    },
    inventario: {
      type: Number,
      required: true,
      integer: true,
      min: 0,
    },
    imagenes: {
      type: [String],
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

export const ToyModel = new model("Toys", schema);
