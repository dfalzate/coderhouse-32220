import { Schema, model } from "mongoose";

const schema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    quantity: {
      type: Number,
      required: true,
      integer: true,
      min: 0,
    },
  },
  {
    timestamps: true,
  },
);

export const ProductModel = new model("Products", schema);
