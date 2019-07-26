import { resolve } from 'path'
import { createServer } from 'http'
import { parse } from 'url'
import next from 'next'
import app from '@/app'
import { port } from '@/config'
import { connectDataBase } from '@/utils'

const { PORT = port } = process.env

async function bootstrap() {
  /** DB */
  await connectDataBase()
  /** Server */
  createServer(app.callback()).listen(PORT, () => {
    const { appLogger } = app.context
    appLogger.info(`Application successfully started at port:${PORT}`)
  })
}

bootstrap()
