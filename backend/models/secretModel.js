const mongoose = require('mongoose')

const secretSchema = mongoose.Schema({
  isIt: {
    type: Boolean,
    required: true
  },
  secretDef: {
    type: String,
    required: true
  },
})

module.exports = mongoose.model('Secret', secretSchema)