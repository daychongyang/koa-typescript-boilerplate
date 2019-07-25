import { Context } from 'koa'
import User from '@/models/user'

class UserController {
  async query(ctx: Context) {
    try {
      await User.create({ name: 'day', age: 18 })

      ctx.body = await User.collection.find({}, { fields: { name: 'name', id: '_id' } }).limit(2)
    } catch (e) {
      ctx.body = e
    }
  }
}

export default new UserController()
