import { Context } from 'koa'
import UserService from '@/services/user'

class UserController {
  async create(ctx: Context) {
    const { name, mobile, password, identity = 1 } = ctx.request.body
    try {
      await UserService.create({ name, mobile, password, identity })
    } catch (e) {
      console.error(e)
    }
    ctx.body = {
      code: 200,
      data: true,
      payload: ctx.request.body,
      query: ctx.request.query,
    }
  }

  async delete(ctx: Context) {}

  async update(ctx: Context) {}

  async detail(ctx: Context) {}

  async query(ctx: Context) {
    try {
      ctx.body = {
        code: 200,
        data: await UserService.query(),
      }
    } catch (e) {
      console.error(e)
    }
  }
}

export default new UserController()
