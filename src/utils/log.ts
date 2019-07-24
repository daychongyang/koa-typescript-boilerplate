import { configure, getLogger } from 'koa-log4'

configure({
  appenders: {
    access: {
      type: 'file',
      filename: './logs/access.log',
    },
    error: { type: 'file', filename: 'logs/error.log' },
    app: { type: 'console' },
  },
  categories: {
    default: { appenders: ['access'], level: 'info' },
    error: { appenders: ['error'], level: 'error' },
    app: { appenders: ['app'], level: 'all' },
  },
})

export const logger = getLogger('access')
export const appLogger = getLogger('app')
export const errorLogger = getLogger('error')

export * from 'koa-log4'
export default logger
