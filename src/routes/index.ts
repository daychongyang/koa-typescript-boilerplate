import Router from 'koa-router'
import A from './a'

let router = new Router()

router.use('/', A.routes(), A.allowedMethods())

export default router
