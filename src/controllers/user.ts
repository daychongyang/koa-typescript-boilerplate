import { Context } from 'koa'

export const getUserInfo = (ctx: Context) => {
  ctx.body = {
    code: 200,
    data: {
      name: 'Day',
    },
  }
}
