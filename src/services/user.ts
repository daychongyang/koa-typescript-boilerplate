import User from '@/models/user'

class UserService {
  async create(payload: any) {
    await User.insertMany([payload])
  }

  async query() {
    return await User.find({})
  }
}

export default new UserService()
