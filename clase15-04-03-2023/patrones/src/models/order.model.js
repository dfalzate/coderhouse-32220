import { Schema, model, SchemaTypes } from "mongoose";

const schema = new Schema(
  {
    number: {
      type: String,
      required: true,
    },
    business: {
      type: SchemaTypes.ObjectId,
      ref: "Businesses",
      required: true,
    },
    user: {
      type: SchemaTypes.ObjectId,
      ref: "Users",
      required: true,
    },
    products: [
      {
        product: {
          type: SchemaTypes.ObjectId,
          ref: "Products",
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
          min: 1,
        },
        price: {
          type: Number,
          required: true,
          min: 0,
        },
      },
    ],
    totalPrices: {
      type: Number,
      required: true,
      min: 0,
    },
    status: {
      type: String,
      enum: ["Open", "InProgress", "Closed", "Cancel"],
      default: "Open",
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

export const OrderModel = new model("Orders", schema);
