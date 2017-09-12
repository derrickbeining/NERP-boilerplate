const path = require('path')
const rootRouter = require('express').Router()
const errorHandler = require('../errorHandling')


rootRouter.use('/api', require('./api'));
// rootRouter.use('/', require('./'));
// rootRouter.use('/', require('./'));

rootRouter.get('*', (req, res, next) => {
  res.sendFile(path.join(process.env.PWD, './browser/root/index.html'))
})

rootRouter.use(errorHandler)

module.exports = rootRouter
