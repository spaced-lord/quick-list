const db = require("../models");

module.exports = {
  getAll: function (req, res) {
    db.Recipe.find().then((data) => res.json(data));
  },
};
