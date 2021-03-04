const db = require("../models");

module.exports = {
  createNew: function (req, res) {
    console.log(req.body);
    db.Ingredient.create(req.body)
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        if (err) {
          console.log(err);
        }
      });
  },
  getAll: function (req, res) {
    db.Ingredient.find()
      .then((data) => res.json(data))
      .catch((err) => {
        if (err) {
          console.log(err);
        }
      });
  },
  matchIngredient: function (req, res) {
    db.IngredientType.aggregate([
      {
        $lookup: {
          from: "ingredients",
          localField: "type",
          foreignField: "type",
          as: "ingredientMatch",
        },
      },
    ])
      .then((data) => res.json(data))
      .catch((err) => {
        if (err) {
          console.log(err);
        }
      });
  },
};
