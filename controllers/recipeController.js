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
  createNew: function (req, res) {
    db.Recipe.create(req.body)
      .then((data) => {
        console.log(data);
        res.json(data);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  findOne: function (req, res) {
    console.log(req.params.id);
    db.Recipe.findOne({ _id: req.params.id })
      .then((data) => {
        res.json(data);
      })
      .catch((err) => console.log(err));
  },
};
