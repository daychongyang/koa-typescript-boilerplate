import Router from 'koa-router'
import user from './user'

let router = new Router()

router.use('/', user.routes(), user.allowedMethods())

export default router
