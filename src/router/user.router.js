const Router = require('koa-router')
const userRouter = new Router();
const {
    user,
    signin,
    getUser,
} = require('../controller/user.controller')
userRouter.prefix('/user')

// userRouter.get('/',user)

userRouter.get('/list',getUser)

// userRouter.post('/signin',signin)

module.exports = userRouter;