import Koa from 'koa'
import { resolve } from 'path'
import log from 'koa-logger'
import json from 'koa-json'
import resource from 'koa-static'
import cors from '@koa/cors'
import bodyparser from 'koa-bodyparser'
import router from '@/routes'
import { logger, koaLogger, errorLogger, appLogger } from '@/utils'

const app = new Koa()

/** Middlewares */
app.use(log())
app.use(cors())
app.use(
  bodyparser({
    enableTypes: ['json'],
  }),
)
app.use(koaLogger(logger, { level: 'auto' }))
app.use(router.routes()).use(router.allowedMethods())
app.use(json())
app.use(resource(resolve(__dirname, '../public')))
app.on('error', (err, ctx) => errorLogger.error('server error', err, ctx))

/** Context */
Object.assign(app.context, { logger, appLogger })

export = app
