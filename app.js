const express = require('express')
const app = express()

const locationsController = require('./models/locationModels')
const machinesController = require('./models/machineModels')
const personsController = require('./models/personModels')
const plansController = require('./models/planModel')
const specialEventsController = require('./models/specialEventsModel')

// Routes
// home
app.get('/', (req, res) => {
    res.send(`Hello, world!`)
})

// location, machine, person, plans, special-event resources
const locationsController = require('./controllers/locationsController')
app.use('/locations', locationsController)

const machinesController = require('./controllers/machinesController')
app.use('/machines', machinesController)

const personsController = require('./controllers/personsController')
app.use('/persons', personsController)

const plansController = require('./controllers/plansController')
app.use('/plans', plansController)

const specialEventsController = require('./controllers/specialEventsController')
app.use('/specialEvents', specialEventsController)

// not found 404

app.get('*', (req, res) => {
    res.status(404).json({ error: "Page not found"})
})




module.exports = app