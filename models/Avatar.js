const { model, Schema } = require('mongoose')

const AvatarSchema = new Schema({
  fileName: String,
  path: String
}, { timestamps: true })

module.exports = model('avatar', AvatarSchema)