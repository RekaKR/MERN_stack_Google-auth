const express = require("express")
const app = express()

const cors = require('cors')


//MIDDLEWARES
app.use(express.urlencoded({ extended: false })) //parse requests of content-type - application/x-www-form-urlencoded
app.use(express.json()) //parse requests of content-type - application/json
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}))


//ROUTES
//const toDoRoutes = require('./routes/toDoRoutes')

//app.use('/to-do-list', toDoRoutes)


module.exports = app