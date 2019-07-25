import Router from 'koa-router'
import User from '../controllers/user'

const router = new Router({ prefix: 'user' })

router.get('/list', User.query)

export default router
