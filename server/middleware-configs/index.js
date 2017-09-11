const middlewareRoute = require('express').Router()
const httpLogger = require('volleyball')
const {json, urlencoded} = require('body-parser')

middlewareRoute.use(
  httpLogger,
  json(),
  urlencoded({extended: true}),
  express.static(path.join(process.env.PWD, './browser/built'))
)

module.exports = middlewareRoute
