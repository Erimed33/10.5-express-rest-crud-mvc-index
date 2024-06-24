const express = require('express')
const persons = express.Router()
const personsArray = require('../models/personModels')


persons.get('/', (req, res) => {
    res.json(personsArray);
  });

  module.exports = persons