const express = require('express')
const app = express()

const locations = require('./models/location.model')
const machines = require('./models/machine.model')
const persons = require('./models/person.model')
const plans = require('./models/plan.model')
const specialEvents = require('./models/special-event.model')

// Routes
// home
app.get('/', (req, res) => {
    res.send(`Hello, world!`)
})

// location, machine, person, plans, special-event resources
const locationsController = require('./controllers/locations.controller')
app.use('/locations', locationsController)

const machinesController = require('./controllers/machines.controller')
app.use('/machines', machinesController)

const personsController = require('./controllers/persons.controller')
app.use('/persons', personsController)

const plansController = require('./controllers/plans.controller')
app.use('/plans', plansController)

const specialEventsController = require('./controllers/special-events.controller')
app.use('/specialEvents', specialEventsController)

// not found 404

app.get('*', (req, res) => {
    res.status(404).json({ error: "Page not found"})
})




module.exports = app