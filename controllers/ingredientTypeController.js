const db = require("../models");

module.exports = {
  getAll: function (req, res) {
    db.IngredientType.find()
      .then((data) => res.json(data))
      .catch((err) => {
        if (err) {
          console.log(err);
        }
      });
  },
};
