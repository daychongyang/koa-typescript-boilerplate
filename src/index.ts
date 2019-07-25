import app from '@/app'
import { port } from '@/config'
import { connectDataBase } from '@/utils'

const { PORT = port } = process.env

async function bootstrap() {
  await connectDataBase()

  app.listen(PORT, () => {
    const { appLogger } = app.context
    appLogger.info(`Application successfully started at port:${PORT}`)
  })
}

bootstrap()
