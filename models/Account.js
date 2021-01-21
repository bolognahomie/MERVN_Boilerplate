const { model, Schema } = require('mongoose')

const AccountSchema = new Schema({
  username: String,
  hide: Boolean,
  type: String,
  platform: String,
  price: Number,
  currentOffer: Number,
  description: String,
  status: {
    type: String,
    default: "for_sale"
  },
  sellPrice: {
    type: Number,
    default: 0
  },
  offers: [{
    type: Schema.Types.ObjectId,
    ref: 'offer'
  }],
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'user'
  },
  events: [{
    type: Schema.Types.ObjectId,
    ref: 'event'
  }],
  contract: {
    type: Schema.Types.ObjectId,
    ref: 'contract'
  }
}, { timestamps: true })

module.exports = model('account', AccountSchema)