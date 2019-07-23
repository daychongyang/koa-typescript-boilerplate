import Router from 'koa-router'

const router = new Router()
// router.prefix('/a')

router.get('/*', (ctx, next) => {
  ctx.body = 'hello a module router'
})

export default router
