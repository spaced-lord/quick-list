const db = require("../models");

module.exports = {
  createNew: function (req, res) {
    console.log(req.body);
    db.Ingredient.create(req.body)
      .then((data) => {
        console.log(data);
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
};
