import express from "express";
import "./config/db.js";
import { PizzaModel } from "./models/pizza.model.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const pizzas = [
  {
    name: "nombre1",
    size: "large",
    price: 10,
    quantity: 10,
  },
  {
    name: "nombre2",
    size: "medium",
    price: 10,
    quantity: 10,
  },
  {
    name: "nombre1",
    size: "small",
    price: 10,
    quantity: 10,
  },
  {
    name: "nombre3",
    size: "small",
    price: 10,
    quantity: 10,
  },
  {
    name: "nombre2",
    size: "large",
    price: 10,
    quantity: 10,
  },
  {
    name: "nombre2",
    size: "small",
    price: 10,
    quantity: 10,
  },
  {
    name: "nombre3",
    size: "large",
    price: 10,
    quantity: 10,
  },
  {
    name: "nombre3",
    size: "medium",
    price: 10,
    quantity: 10,
  },
  {
    name: "nombre4",
    size: "small",
    price: 10,
    quantity: 10,
  },
  {
    name: "nombre2",
    size: "small",
    price: 10,
    quantity: 10,
  },
];

app.get("/create", async (req, res) => {
  await PizzaModel.create(pizzas);
  res.send("Pizzas creadas correctamente");
});

app.get("/aggregation1", async (req, res) => {
  const { size } = req.query;
  const aggregation = [
    {
      $match: {
        size,
      },
    },
    {
      $group: {
        _id: "$name",
        total: { $sum: "$quantity" },
      },
    },
  ];
  const response = await PizzaModel.aggregate(aggregation);
  res.json(response);
});

app.get("/aggregation2", async (req, res) => {
  const aggregation = [
    {
      $group: {
        _id: "$size",
        total: { $sum: "$quantity" },
      },
    },
    {
      $sort: {
        total: -1,
      },
    },
    {
      $group: {
        _id: 1,
        orders: { $push: "$$ROOT" },
      },
    },
    {
      $project: {
        _id: 0,
        orders: 1,
      },
    },
    {
      $merge: {
        into: "reports",
      },
    },
  ];
  await PizzaModel.aggregate(aggregation);
  res.send("Reporte generado correctamente");
});

const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () =>
  console.log(`🚀 Server started on port http://localhost:${PORT}`),
);
server.on("error", (err) => console.log(err));
