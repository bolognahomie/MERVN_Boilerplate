const { model, Schema } = require('mongoose')

const OfferSchema = new Schema({
  account: {
    type: Schema.Types.ObjectId,
    ref: 'account'
  },
  offerer: {
    type: Schema.Types.ObjectId,
    ref: 'user'
  },
  price: Number,
  status: String
}, { timestamps: true })

module.exports = model('offer', OfferSchema)