const Router = require('koa-router')
const userRouter = new Router();
const userController = require('../controller/user.controller')
userRouter.prefix('/user')

// userRouter.get('/',user)
userRouter.post('/register',userController.register)
userRouter.get('/login',userController.userLogin)
userRouter.get('/list',userController.getUser)
userRouter.get('/userInfo',userController.getUserInfo)
userRouter.post('/userInfo',userController.updateUserInfo)
module.exports = userRouter;