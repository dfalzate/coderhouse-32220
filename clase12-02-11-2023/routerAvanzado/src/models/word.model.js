import { Schema, model } from "mongoose";

const schema = new Schema(
  {
    word: { type: String, required: true },
  },
  {
    timestamps: true,
  },
);

export const WordModel = model("Words", schema);
