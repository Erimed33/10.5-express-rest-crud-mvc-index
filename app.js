const express = require('express')
const app = express()

const locationModels = require('./models/locationModels')
const machineModels = require('./models/machineModels')
const personModels = require('./models/personModels')
const planModels = require('./models/planModel')
const specialEventsModel= require('./models/specialEventsModel')

// Routes
// home
app.get('/', (req, res) => {
    res.send(`Hello, world!`)
})

// variables resource
const locationsController = 

// not found 404

app.get('*', (req, res) => {
    res.status(404).json({ error: "Page not found"})
})




module.exports = app