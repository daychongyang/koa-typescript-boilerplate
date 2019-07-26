import User from '@/models/user'

class UserService {
  async create(payload: any) {
    await User.insertMany([payload])
  }
}

export default new UserService()
