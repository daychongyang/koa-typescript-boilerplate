import Koa from 'koa'
import { resolve } from 'path'
import log from 'koa-logger'
import json from 'koa-json'
import resource from 'koa-static'
import router from '@/routes'
import { logger, koaLogger, errorLogger, appLogger } from '@/utils'

const app = new Koa()

/** Middlewares */
app
  .use(log())
  .use(json())
  .use(koaLogger(logger, { level: 'auto' }))
  .use(router.routes())
  .use(router.allowedMethods())
  .use(resource(resolve(__dirname, '../public')))
  .on('error', (err, ctx) => errorLogger.error('server error', err, ctx))

/** Context */
Object.assign(app.context, { logger, appLogger })

export = app
