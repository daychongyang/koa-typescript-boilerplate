import Router from 'koa-router'
import { getUserInfo } from '../controllers/user'

const router = new Router({ prefix: 'user' })

router.get('/current', getUserInfo)

router.post('/all', (ctx, next) => {
  ctx.body = 'hello a module router'
})

export default router
