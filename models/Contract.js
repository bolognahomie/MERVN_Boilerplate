const { model, Schema } = require('mongoose')

const ContractSchema = new Schema({
  account: {
    type: Schema.Types.ObjectId,
    ref: 'account'
  },
  buyer: {
    type: Schema.Types.ObjectId,
    ref: 'user'
  },
  seller: {
    type: Schema.Types.ObjectId,
    ref: 'user'
  },
  price: Number,
  status: String,
  buyerFeedback: {
    feedbackType: String,
    content: String
  },
  sellerFeedback: {
    feedbackType: String,
    content: String
  }
}, { timestamps: true })

module.exports = model('contract', ContractSchema)