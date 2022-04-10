const Router = require('koa-router')
const userRouter = new Router();
const {
    user,
    signin,
    register,
    getUser,
} = require('../controller/user.controller')
userRouter.prefix('/user')

// userRouter.get('/',user)
userRouter.post('/register',register)
userRouter.get('/list',getUser)

// userRouter.post('/signin',signin)

module.exports = userRouter;