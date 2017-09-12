require('../env')
const path = require('path')
const express = require('express')
const app = express()
const rootRouter = require('./routes')


const httpLogger = require('volleyball')
const {json, urlencoded} = require('body-parser')

app.use(
  httpLogger,
  json(),
  urlencoded({extended: true}),
  express.static(path.join(process.env.PWD, './browser/built')),
  rootRouter
)

const PORT = process.env.SERVER_PORT
app.listen(PORT, () => {
  console.log(`server is listening at port ${PORT}`)
})
