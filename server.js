// dependancy
const app = require('./app')

// configuration

require("dotenv").config()
const port =process.env.PORT

// listen or fire it up 

app.listen(port, () => {
    console.log(`The listening is happening on port ${port}`)
})
