import Router from 'koa-router'

const router = new Router({ prefix: 'user' })

export default router
  .get('/current', (ctx, next) => {
    ctx.body = {
      name: 'Day',
    }
  })
  .post('/all', (ctx, next) => {
    ctx.body = 'hello a module router'
  })
