const Secret = require('../models/secretModel')

const secret_create_get = (req, res) => {
  Secret.find()
    .then(secret => res.json(secret))
    .catch(err => res.status(400).json({ message: `Couldn't find secret ${err}` }))
}

const secret_create_post = (req, res) => {

  /*if (jwt.verify(req.headers.authorization, "JWT_SECRET")) {
        console.log(jwt.verify(req.headers.authorization, JWT_SECRET))
      }*/
  const secret = new Secret({
    isIt: req.body.isIt,
    secretDef: req.body.secretDef
  })

  secret.save()
    .then(data => res.json(data))
    .catch(err => res.json({ message: 'Couldn\'t save secret', err: err }))
}

module.exports = {
  secret_create_get,
  secret_create_post
}