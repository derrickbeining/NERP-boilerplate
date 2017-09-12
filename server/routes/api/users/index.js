const userRouter = require('express').Router();

userRouter.get('/', function (req, res, next) { /* etc */});

userRouter.post('/', function (req, res, next) { /* etc */});

userRouter.put('/:id', function (req, res, next) { /* etc */});

userRouter.delete('/:id', function (req, res, next) { /* etc */});

module.exports = userRouter
