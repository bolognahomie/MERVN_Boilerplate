const { model, Schema } = require('mongoose')

const EventSchema = new Schema({
  account: {
    type: Schema.Types.ObjectId,
    ref: 'account'
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'user'
  },
  type: String,
  content: String
}, { timestamps: true })

module.exports = model('event', EventSchema)