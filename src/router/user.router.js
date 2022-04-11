const Router = require('koa-router')
const userRouter = new Router();
const {
    user,
    userLogin,
    register,
    getUser,
} = require('../controller/user.controller')
userRouter.prefix('/user')

// userRouter.get('/',user)
userRouter.post('/register',register)
userRouter.get('/login',userLogin)
userRouter.get('/list',getUser)

// userRouter.post('/signin',signin)

module.exports = userRouter;