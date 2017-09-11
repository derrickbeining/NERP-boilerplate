require('../env')
const path = require('path')
const express = require('express')
const app = express()

app.use(express.static(path.join(process.env.PWD, './browser/built')))


app.get('*', (req, res, next) => {
  res.sendFile(path.join(process.env.PWD, './browser/root/index.html'))
})

const PORT = process.env.SERVER_PORT

app.listen(PORT, () => {
  console.log(`server is listening at port ${PORT}`)
})
