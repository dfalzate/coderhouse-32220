import { Schema, model } from "mongoose";

const schema = new Schema(
  {
    nombre: {
      type: String,
      required: true,
    },
    estudiantes: [
      {
        type: Schema.Types.ObjectId,
        ref: "Students",
        default: [],
      },
    ],
  },
  {
    timestamps: true,
  },
);

schema.pre("find", function (next) {
  this.populate("estudiantes");
  next();
});

export const CourseModel = model("Courses", schema);
