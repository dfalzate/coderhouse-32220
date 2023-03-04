import { Schema, model, SchemaTypes } from "mongoose";

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
    products: [
      {
        type: SchemaTypes.ObjectId,
        ref: "Products",
        required: true,
      },
    ],
  },
  {
    timestamps: true,
  },
);

export const BusinessModel = new model("Businesses", schema);
