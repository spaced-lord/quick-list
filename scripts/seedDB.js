const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/groceryList");

const ingredientSeedData = [
  {
    type: "Vegetable",
    name: "Tomato",
  },
  {
    type: "Grain",
    name: "Pasta",
  },
  {
    type: "Vegetable",
    name: "Tomato",
  },
  {
    type: "Vegetable",
    name: "Green Pepper",
  },
  {
    type: "Meat",
    name: "Ground Beef",
  },
  {
    type: "Dairy",
    name: "Milk",
  },
  {
    type: "Dairy",
    name: "Cheese",
  },
  {
    type: "Fruit",
    name: "Apple",
  },
  {
    type: "Fruit",
    name: "Orange",
  },
  {
    type: "Fruit",
    name: "Peach",
  },
  {
    type: "Meat",
    name: "Ribeye",
  },
  {
    type: "Vegetable",
    name: "Potato",
  },
  {
    type: "Dairy",
    name: "Cream",
  },
  {
    type: "Meat",
    name: "New York Strip",
  },
];

const ingredientType = [
  { type: "Grain" },
  { type: "Vegetable" },
  { type: "Meat" },
  { type: "Dairy" },
  { type: "Fruit" },
  { type: "Other" },
];

db.IngredientType.remove({})
  .then(() => db.IngredientType.collection.insertMany(ingredientType))
  .then(() => process.exit(0))
  .catch((err) => {
    console.log(err);
    process.exit(2);
  });

db.Ingredient.remove({})
  .then(() => db.Ingredient.collection.insertMany(ingredientSeedData))
  .then(() => process.exit(0))
  .catch((err) => {
    console.log(err);
    process.exit(2);
  });
