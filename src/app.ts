import Koa from 'koa'
import { resolve } from 'path'
import logger from 'koa-logger'
import json from 'koa-json'
import resource from 'koa-static'
import router from './routes'

const app = new Koa()

/** middlewares */
app.use(json())

app.use(logger())

app.use(resource(resolve(__dirname, '../public')))

app.use(router.routes()).use(router.allowedMethods())

export = app
