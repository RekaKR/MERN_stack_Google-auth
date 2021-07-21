const express = require('express')
const router = express.Router()
const secretController = require('../controllers/secretController')

router.post('/', secretController.secret_create_post)

module.exports = router