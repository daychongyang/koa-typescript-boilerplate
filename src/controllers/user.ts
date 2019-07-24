import { Context } from 'koa'

class UserController {
  getInfo = (ctx: Context) => {
    ctx.body = {
      code: 200,
      data: {
        name: 'Day',
      },
      ctx,
    }
  }
}

export default new UserController()
