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
const authRoutes = require('./routes/authRoutes')
const secretRoutes = require('./routes/secretRoutes')

app.use('/login', authRoutes)
app.use('/secret', secretRoutes)


module.exports = app