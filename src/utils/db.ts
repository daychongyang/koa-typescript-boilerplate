import mongoose from 'mongoose'
import { db } from '@/config'
import { appLogger, errorLogger } from '@/utils'

const { DBHOST = db.HOST, DBPORT = db.PORT, DATABASE = db.DATABASE } = process.env

const mongoDB = `mongodb://${DBHOST}:${DBPORT}/${DATABASE}`

export const connectDataBase = async () => {
  mongoose.connect(mongoDB, {
    useNewUrlParser: true,
  })

  mongoose.Promise = global.Promise

  mongoose.connection
    .on('connected', appLogger.info.bind(appLogger, `Mongoose connection open to：${mongoDB}`))
    .on('error', errorLogger.error.bind(errorLogger, 'Mongoose connection error:'))
    .on('disconnected', appLogger.info.bind(appLogger, 'Mongoose connection disconnected'))
}
