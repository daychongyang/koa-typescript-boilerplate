import mongoose from 'mongoose'

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    mobile: {
      type: Number,
      required: true,
    },
    avatar: {
      type: String,
    },
    password: {
      type: String,
      required: true,
    },
    identity: {
      type: Number,
      required: true,
    },
  },
  { versionKey: false },
)

export default mongoose.model('User', userSchema)
