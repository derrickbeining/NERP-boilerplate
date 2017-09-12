const {red} = require('chalk')

module.exports = function (err, req, res, next) {
  const errorMessage = red([
    'ERROR:',
    '\n',
    err.message,
    '\n',
    err.stack
  ])
  console.error(red(errorMessage))

  if (res.headersSent) return next(err)
  res.status(500).send(`ERROR: \n ${err.message} \n ${err.stack}`)
}
