const jwt = require('jsonwebtoken')

require('dotenv').config()
const JWT_SECRET = process.env.JWT_SECRET

const Secret = require('../models/secretModel')

const secret_create_get = (req, res) => {
  Secret.find()
    .then(secret => {
      if (jwt.verify(req.headers.authorization, JWT_SECRET)) {
        res.json(secret)
      }
    })
    .catch(err => res.json({ message: `Couldn't find secret` }))
  //.catch(err => res.json({ message: err }))
}

const secret_create_post = (req, res) => {
  if (jwt.verify(req.headers.authorization, JWT_SECRET)) {
    const secret = new Secret({
      isIt: req.body.isIt,
      secretDef: req.body.secretDef
    })

    secret.save()
      .then(data => {
        res.json(data)
        console.log("lefut")
      })
      .catch(err => res.json({ message: 'Couldn\'t save secret' }))
  }
}

module.exports = {
  secret_create_get,
  secret_create_post
}