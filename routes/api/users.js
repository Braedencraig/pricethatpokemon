const express = require('express');
const Router = express.Router();
const config = require('config');

const User = require('../../models/User');

Router.post('/register', (req, res) => {
    User.findOne({
            name: req.body.name
        })
        .then(user => {
            if (user) {
                return res.status(200).json({
                    name: "Name already exists"
                });
            } else {
                const newUser = new User({
                    name: req.body.name,
                    score: req.body.score
                });

                newUser.save()
                    .then(user => res.json(user))
            }
        });
});

Router.get('/leaderboard', async (req, res) => {
    try {
      const users = await User.find().sort({score: 1});
      if (!users) throw Error('No users');
  
      return res.status(200).json(users);
    } catch (e) {
      res.status(400).json({ msg: e.message });
    }
  });

module.exports = Router;