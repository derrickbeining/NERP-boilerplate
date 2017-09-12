const apiRouter = require('express').Router()
const userRouter = require('./users')
const productRouter = require('./products')

apiRouter
  .use('/users', userRouter)
  .use('/products', productRouter)

module.exports = apiRouter

