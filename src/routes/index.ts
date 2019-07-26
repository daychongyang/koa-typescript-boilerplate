import Router from 'koa-router'
import user from './user'

let router = new Router({ prefix: 'api' })

router.use('/users', user.routes(), user.allowedMethods())

export default router
