const jwt = require('jsonwebtoken')

require('dotenv').config()
const JWT_SECRET = process.env.JWT_SECRET

const Secret = require('../models/secretModel')

const secret_create_get = (req, res) => {
  Secret.find()
    .then(secret => {

      try {
        jwt.verify(req.headers.authorization, JWT_SECRET)
        res.json(secret)
      } catch (err) {
        return res.status(401).json({ message: 'Token invalid' });
      }

      /*
            if (jwt.verify(req.headers.authorization, JWT_SECRET)) {
              res.json(secret)
            }*/
    })
    .catch(err => res.json({ message: `Couldn't find secret` }))
}

const secret_create_post = (req, res) => {
  try {
    jwt.verify(req.headers.authorization, JWT_SECRET)

    const secret = new Secret({
      isIt: req.body.isIt,
      secretDef: req.body.secretDef
    })

    secret.save()
      .then(data => res.json(data))
      .catch(err => res.json({ message: 'Couldn\'t save secret' }))
  } catch (err) {
    return res.status(401).json({ message: 'Token invalid' });
  }
}

module.exports = {
  secret_create_get,
  secret_create_post
}