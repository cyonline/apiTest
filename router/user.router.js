const Router = require('koa-router')
const userRouter = new Router();
const {
    user,
    signin,
    getUser,
} = require('../controller/user.controller')

userRouter.get('/',user)

userRouter.get('/',getUser)

userRouter.post('/signin',signin)

module.exports = userRouter;