const db = require("../models");

module.exports = {
  getAll: function (req, res) {
    db.Recipe.find()
      .then((data) => res.json(data))
      .catch((err) => {
        if (err) {
          console.log(err);
        }
      });
  },
};
