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
    db.Recipe.findOne({ _id: req.params.id })
      .then((data) => {
        res.json(data);
      })
      .catch((err) => console.log(err));
  },
  updateOne: function (req, res) {
    db.Recipe.findOne({ _id: req.params.id })
      .then((data) => {
        if (data.favorite) {
          db.Recipe.findByIdAndUpdate(
            { _id: req.params.id },
            { $set: { favorite: false } },
            { new: true }
          )
            .then((newData) => res.json(newData))
            .catch((err) => console.log(err));
        } else {
          db.Recipe.findByIdAndUpdate(
            { _id: req.params.id },
            { $set: { favorite: true } },
            { new: true }
          )
            .then((newData) => res.json(newData))
            .catch((err) => console.log(err));
        }
      })
      .catch((err) => console.log(err));
  },
};
