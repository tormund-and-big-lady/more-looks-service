const dbhelpers = require('../database/dbhelpers.js');

const controller = {
  get: (req, res) => {
    dbhelpers.get()
      .then(data => res.status(200).send(data))
      .catch(err => res.status(404).send(err))
  },
  post: (req, res) => {
    res.send('post works')
  }
}

module.exports = controller;