import app from '@/app'
import { port } from '@/config'

const { PORT = port } = process.env

app.listen(PORT, () => {
  const { appLogger } = app.context
  appLogger.info(`Application successfully started at port:${PORT}`)
})
