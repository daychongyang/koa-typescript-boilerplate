import Router from 'koa-router'
import User from '../controllers/user'

const router = new Router({ prefix: 'user' })

router.get('/current', User.getInfo)

router.post('/all', (ctx, next) => {
  ctx.body = 'hello a module router'
})

export default router
