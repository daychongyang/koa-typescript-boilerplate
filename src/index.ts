import app = require('./app')

const { PORT = 12306 } = process.env

app.listen(PORT, () => {
  console.info(`App is running at port:${PORT}`)
})
