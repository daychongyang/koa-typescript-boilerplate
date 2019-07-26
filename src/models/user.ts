import mongoose from 'mongoose'

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    mobile: {
      type: Number,
      required: true,
    },
    avatar: {
      type: String,
    },
    identity: {
      type: Number,
      required: true,
    },
  },
  { versionKey: false },
)

export default mongoose.model('User', userSchema)
