const productRouter = require('express').Router();

productRouter.get('/', function (req, res, next) { /* etc */});

productRouter.post('/', function (req, res, next) { /* etc */});

productRouter.put('/:id', function (req, res, next) { /* etc */});

productRouter.delete('/:id', function (req, res, next) { /* etc */});

module.exports = productRouter
