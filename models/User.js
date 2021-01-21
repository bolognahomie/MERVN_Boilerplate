const { model, Schema } = require('mongoose')

const UserSchema = new Schema({
  username: String,
  displayName: String,
  email: String,
  email_verified: {
    type: Boolean,
    default: false
  },
  verification_code: String,
  hash: String,
  profile: {
    userTitle: {
      type: String,
      default: "OGS Member"
    },
    avatar: {
      type: Schema.Types.ObjectId,
      ref: 'avatar',
      default: '5ffd17adfc7be148301e38b3'
    },
    rep: {
      type: Number,
      default: 0
    },
    socials: {
      type: Schema.Types.Array,
      default: []
    }
  },
  accounts: [{
    type: Schema.Types.ObjectId,
    ref: 'account'
  }],
  onlineStatus: {
    isOnline: Boolean,
    lastOnline: Number
  }
}, { timestamps: true })

module.exports = model('user', UserSchema)