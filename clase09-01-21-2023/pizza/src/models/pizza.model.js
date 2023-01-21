import { Schema, model } from "mongoose";

const schema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    size: {
      type: String,
      enum: ["small", "medium", "large"],
      default: "medium",
    },
    price: {
      type: Number,
      require: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

export const PizzaModel = model("Pizzas", schema);
