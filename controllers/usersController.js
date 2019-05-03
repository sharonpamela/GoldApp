const db = require('../models/User');
const mongoose = require("mongoose")
//const mongojs = require("mongojs");
const User = mongoose.model('users');

// Defining methods for the usersController
module.exports = {

  findAll: function (req, res) {
    db.User
      .find()
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.Users
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function (req, res) {
    db.Users
      .create({ user_id: "33", favorites: ["BTC", "ETH"] })
      // .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: async function (req, res) {
    console.log(req.body);
    console.log("req.user_id", req.body.user_id)
    console.log("favorites:", req.body.favorites)
    db.Users
      .findOneAndUpdate({ _id: "5cc66f39a08cd5b8da4f6da8" }, { favorites: ['bleh', 'blah'] }, { new: true })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
    // .findOneAndUpdate({ _id: req.params.id }, req.body)
  },
  remove: function (req, res) {
    db.Users
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  fetchBalance: function (req, res) {
    // send user's id and retrieve his/her balance from db
    db.Users
      .findOne({googleId:req.id})
      .then(console.log(req.query, "req query"))
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
  },

  buyButton: function (req, res) {
    console.log(req.body, "buy");
    var newBal = req.body.balance - req.body.price;
    User
      .findOneAndUpdate( req.body.googleId, {balance: newBal})
      .then(dbModel => {console.log(dbModel), res.json(dbModel)})
      .catch(err => res.status(422).json(err));
  },

  sellButton: function (req, res) {
    console.log(req.body, "sell");
    var newBal = req.body.balance + req.body.price;
    db.User
      .findOneAndUpdate({ user_id: 22 }, { balance: newBal })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }

};
