const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
  isIt: {
    type: Boolean,
    required: true
  },
  secretDef: {
    type: String,
    required: true
  },
})

module.exports = mongoose.model('User', userSchema)